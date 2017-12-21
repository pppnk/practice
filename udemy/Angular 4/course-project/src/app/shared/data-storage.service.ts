import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {RecipeService} from "../recipes/recipe.service";
import {Recipe} from "../recipes/recipe.model";
import {AuthService} from "../auth/auth.service";

@Injectable()
export class DataStorageService {
    rootUrl: string = 'https://ng-recipe-book-786bc.firebaseio.com/';

    constructor(private http: Http, private recipeService: RecipeService, private authService: AuthService){}

    storeRecipes(){
        const token: string = this.authService.getToken();
        return this.http.put(this.rootUrl + 'recipes.json?auth=' + token ,this.recipeService.getRecipes());
    }

    getRecipes(){
        const token: string = this.authService.getToken();
        this.http.get(this.rootUrl + 'recipes.json?auth=' + token)
            .subscribe(
            (response: Response) => {
                const recipes: Recipe[] = response.json();
                for(let recipe of recipes){
                    if(!recipe['ingredients']){
                        console.log(recipe);
                        recipe['ingredients'] = [];
                    }
                }
                this.recipeService.setRecipes(recipes);
            }
        );
    }
}