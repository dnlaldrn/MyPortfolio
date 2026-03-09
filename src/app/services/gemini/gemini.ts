import { Injectable } from '@angular/core';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class GeminiService {
  private genAI = new GoogleGenerativeAI(environment.apiKey);
  private model = this.genAI.getGenerativeModel({ model: 'gemini-3-flash-preview' }); 

  async generateResponse(prompt: string) {
    const result = await this.model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  }
}