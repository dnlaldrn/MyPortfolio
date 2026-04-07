import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GeminiService } from '../../services/gemini/gemini';
import { CommonModule } from '@angular/common';
import { Theme } from '../../services/theme';
@Component({
  selector: 'app-chat-components',
  imports: [FormsModule,CommonModule,],
  templateUrl: './chat-components.html',
  styleUrl: './chat-components.css',
})
export class ChatComponents {
  isOpen = false;
  userInput = '';
  chatHistory: any[] = [];

  constructor(private geminiservice: GeminiService, public theme :Theme ) {}

  ngOnInit(): void {
    
  }

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  async sendMessage() {
    if(!this.userInput.trim())return;  

    const message = this.userInput;
    this.userInput = '';

    try {
      const response = await this.geminiservice.generateResponse(message);
      this.chatHistory.push({
        role:'user', text: message
      });
       this.chatHistory.push({
        role:'ai', text: response
      })  
    } catch (error){
      console.log('Failed to generate response', error)
    }
  }
}
