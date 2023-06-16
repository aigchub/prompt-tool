import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromptService {
  server: string = "";
  constructor(private http: HttpClient) { }

  setServer(server:string) {
    this.server = server;
  }
  cate(): Observable<any> {
    return this.http.get(`${this.server}/prompt/cate`);
  }

  list(): Observable<any> {
    return this.http.get(`${this.server}/prompt/list`);
  }
  /**
   * 调用 API 请求
   * @param promptTemplate 
   * @param solution 
   * @param content 
   * @returns 
   */
  chat(promptTemplate:string,solution:string,content:string) :Observable<any> {

    return this.http.post(`${this.server}/openai/chat`,content,{
      params:{
        promptTemplate,solution
      }
    });
  }
  /**
   * 加载提示词模板配置
   * @param promptTemplate 
   * @returns 
   */
  load(promptTemplate:string): Observable<any> {
    return this.http.get(`${this.server}/prompt/load`,{
      params:{
        promptTemplate
      }
    });
  }
}
