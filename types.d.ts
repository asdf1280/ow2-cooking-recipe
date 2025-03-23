type CookMethod = "cutting" | "grilling" | "frying" | "pot" | "pan" | "impact" | "mix" | "premade" | "fridge"
type Recipe = {
    /**
     * Empty for fridge items. Two entries for 'mix'. One entry otherwise.
     */
    ingredients: Array<Recipe>
    method: CookMethod
    itemId: number
    fullOutput: Array<number>
    repeat: number
    effort: number
}

type FlatRecipe = {
    ingredients: Array<number>
    method: CookMethod
    itemId: number
    fullOutput: Array<number>
    effort: number
    repeat: number
}