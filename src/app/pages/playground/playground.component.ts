import { Component, OnInit } from '@angular/core';
import { PromptCate } from 'src/app/model/prompt-cate';
import { PromptConfig, Solution } from 'src/app/model/prompt-config';
import { PromptService } from 'src/app/services/prompt.service';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

  cates: PromptCate[] = [];
  selectedCate!: PromptCate;
  selectedSolution!: Solution;

  promptTemplates: Map<string, PromptConfig> = new Map();
  content: string = "124";
  result: string = "";
  get cateOptions() {
    return this.cates.map((cate) => {
      return {
        label: cate.title,
        value: cate.id
      }
    });
  }

  loadResult = false;

  get currentSolution() {
    if (!this.selectedCate) {
      return [];
    }
    let result = this.promptTemplates.get(this.selectedCate.id)?.solutions.map(solution => {
      return {
        label: solution.description,
        value: solution.id
      }
    })
    if (!result) {
      result = [];
    }
    return result;
  }

  constructor(private promptService: PromptService) {
    promptService.setServer("http://localhost:8080");
  }
  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.promptService.cate()
      .subscribe(res => {
        console.log('res:', res);
        this.cates = res;
        if (this.cates.length > 0) {
          this.loadTemplate(this.cates[0].id);
        }
      })
  }

  loadTemplate(promptTemplate: string) {
    this.promptService.load(promptTemplate)
      .subscribe(res => {
        if (res != "") {
          this.promptTemplates.set(promptTemplate, res);
          console.log('templates:', this.promptTemplates);
        }
      })
  }
  cateChange(idx: number) {
    console.log('idx', idx);
    if (this.cates[idx] != undefined) {
      if (this.promptTemplates.get(this.cates[idx].id) == undefined) {
        this.loadTemplate(this.cates[idx].id);

      }
      this.selectedCate = this.cates[idx];

    }
  }
  solutionChange(idx: number) {
    let selId = this.currentSolution[idx].value;

    let solutions = this.promptTemplates.get(this.selectedCate?.id)
      ?.solutions.filter(solution => solution.id == selId);
    console.log("solutionChange:", idx, selId, solutions);
    if (solutions && solutions.length == 1) {
      console.log('selected solution:', solutions[0]);
      this.selectedSolution = solutions[0];
    }
  }

  submit() {


    let promptTemplate = this.selectedCate.id;
    let solution = this.selectedSolution.id;
    console.log('submit:', promptTemplate, solution,this.content);
    this.loadResult = true;
    this.promptService.chat(promptTemplate, solution, this.content)
      .subscribe(res => {
        console.log("chat result:",res);
        this.result = res["value"];
      }, err => { 
        this.loadResult = false;
      }, () => {
        this.loadResult = false;
      });

  }
}
