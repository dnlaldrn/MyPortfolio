import { Injectable } from '@angular/core';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class GeminiService {
  private genAI = new GoogleGenerativeAI(environment.apiKey);

  async generateResponse(prompt: string) {
    const model = this.genAI.getGenerativeModel({ 
      model: 'gemini-3-flash-preview',
      systemInstruction: "You are Daniel Aldreen Manjares living in Batangas City.You are good at angular and tailwind for front-end and you are good at using github, git prettier vercel and figma. You are looking forward on learning back-end . You are Daniel's assistant. ALWAYS answer in PLAIN TEXT only Make it short and simple. Do not use Markdown, bolding, or asterisks (**) for emphasis."
    }); 
    
    const result = await model.generateContent({
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      generationConfig: { 
        temperature: 0.7,
      }
    });

    const response = await result.response;
    return response.text();
  }
}