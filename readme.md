오버워치 2 워크샵 '레스토랑 - 모듬회밥!' 모드의 조리법을 소개하는 프로그램입니다.

워크샵 코드 : SPXXM

접속 : [https://asdf1280.github.io/ow2-cooking-recipe/](https://asdf1280.github.io/ow2-cooking-recipe/)

본 프로젝트는 취미로 제작되었기 때문에 최신 레시피 변경 사항이 제공되지 않을 수 있습니다. 그럴 때는 사용자 지정 게임 코드 전체를 code.txt 파일 안에 붙여넣은 뒤, data init Rule 두 개를 찾아 전체 복사하여, recipe.js 최상단의 'DATA_INIT_CODE' 문자열에 붙여넣어 주세요.

스크립트가 캐시에 저장된 경우 최신 변경 사항이 제대로 불러와지지 않을 수 있습니다. 그럴 때는 index.html에서 script.js를 불러오는 태그 뒤에 임의의 내용을 추가하세요.

# How does it calculate the recipe?
## Overview

This function generates a detailed “recipe” (a series of steps) needed to create a specific item in the minigame. It does so in two major phases:

---

### 1. Building the Recipe Tree (Recursive Calculation)

- **Recursive Helper (`calculateFullRecipe`)**  
  The inner function takes an initial item ID and builds a tree structure that represents how that item is crafted. It uses a queue (`calculationQueue`) to process items one by one, where each queue element is a pair containing an item ID and its parent recipe node.  

- **Creating Recipe Nodes**  
  For each item dequeued, it creates a basic recipe node (with default values like method `"fridge"`, a simple output, and a repeat count of 1). If it’s the very first (root) item, it saves that node as the final result; otherwise, it adds the node as an ingredient in its parent.

- **Deciding How to Produce an Item**  
  The code then checks several conditions:  
  - If there is no crafting method available (no entry in `recipeReversedMap`) or the item is available directly in the “fridge” (using the provided stage ID), it stops further processing for that item.  
  - If the item is already in the “inventory,” it marks the node with method `"premade"` (indicating the item is already made).  
  - Otherwise, it retrieves all possible methods to produce the item from `recipeReversedMap` and scores each one. For example, if a method involves “mixing” ingredients and one of the ingredients is the same as the output, it penalizes that method. The best-scoring method is chosen, its output is added to the inventory, and all required ingredients are enqueued for further processing.

- **Infinite Loop Protection**  
  The loop checks elapsed time and will throw an error if it runs longer than 2 seconds, preventing an endless loop.

---

### 2. Flattening and Optimizing the Recipe (Derepetition)

- **Flattening the Tree**  
  Once the complete recipe tree is built, the function uses `getRecipeSteps` to traverse the tree recursively. This process flattens the nested structure into an ordered list of steps. Each step (a “FlatRecipe”) includes:
  - The list of ingredient IDs,
  - The method used,
  - The full output of that step, and
  - How many times the step should be repeated.

- **Eliminating Redundancies**  
  The next block iterates over the recipe tree in reverse order to remove duplicate or repetitive sub-recipes:
  - It uses a stack (`derepeatStack`) to examine each parent-child pair.
  - For a given ingredient, if all of its sub-steps meet certain conditions (i.e. they are not already marked as “premade”), the code then checks for another occurrence of the same recipe (by comparing item IDs).
  - When a duplicate is found, it “collapses” the redundant branch by clearing its ingredients, marking it as `"premade"`, and increasing a repeat counter. This consolidation avoids having to perform the same recipe step multiple times.

---

### Final Outcome

The function ultimately returns a flat array of recipe steps. This output details, in order, the methods and ingredients needed to craft the target item in the minigame—optimizing the process by removing unnecessary duplications.

In summary, the code calculates the recipe by:
1. Recursively building a full recipe tree with every sub-ingredient and method.
2. Flattening that tree into a list of actionable steps.
3. Cleaning up the steps to remove repetitions, ensuring the final output is both comprehensive and efficient for the game’s crafting system.