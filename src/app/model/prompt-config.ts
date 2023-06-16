export class Solution {
    id:string = "";
    description:string = "";
    template:string = "";
    prompts: Prompt[] = [];
    inputs: Input[]= [];
}
class Input {
    name:string = "";
    type:string = "";
    placeholder:string = "";
}
class Prompt {
    role:string = "";
    content: string = "";
}
export class PromptConfig {
    id:string = "";
    description: string = "";
    tags:string[] = [];
    solutions:Solution[] = [];

}