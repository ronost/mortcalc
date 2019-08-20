import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'loan-ratio',
    templateUrl: './loan-ratio.component.html',
    styleUrls: ['./loan-ratio.component.css']
  })

export class LoanRatioComponent implements OnInit {
    loanRatioCanvas: HTMLCanvasElement;
    loanRatioCanvasContext: CanvasRenderingContext2D;
    @Input() price: number;
    @Output() priceChange = new EventEmitter<number>();
    @Input() downPayment: number;
    @Output() downPaymentChange = new EventEmitter<number>();

    ngOnInit() {
        this.loanRatioCanvas = <HTMLCanvasElement> document.getElementById("loanRatio");
        this.loanRatioCanvasContext = this.loanRatioCanvas.getContext("2d");

        this.drawHouse();
    }

    drawHouse() {
        this.loanRatioCanvasContext.fillStyle = "#FF0000";
        this.loanRatioCanvasContext.fillRect(12.5,30,175,70);

        // Draw triangle
        this.loanRatioCanvasContext.fillStyle="#000000";
        this.loanRatioCanvasContext.beginPath();
        this.loanRatioCanvasContext.moveTo(12.5,30);
        this.loanRatioCanvasContext.lineTo(185,30);
        this.loanRatioCanvasContext.lineTo(99,0);
        this.loanRatioCanvasContext.closePath();
        this.loanRatioCanvasContext.fill();

        //windows
        this.loanRatioCanvasContext.fillStyle="#663300";
        this.loanRatioCanvasContext.fillRect(25,40,35,50);
        this.loanRatioCanvasContext.fillStyle="#0000FF";
        this.loanRatioCanvasContext.fillRect(27,42,13,23);
        this.loanRatioCanvasContext.fillRect(43,42,13,23);
        this.loanRatioCanvasContext.fillRect(43,67,13,21);
        this.loanRatioCanvasContext.fillRect(27,67,13,21);

        //door
        this.loanRatioCanvasContext.fillStyle = "#754719";
        this.loanRatioCanvasContext.fillRect(80,53,30,100);

        //door knob
        this.loanRatioCanvasContext.beginPath();
        this.loanRatioCanvasContext.fillStyle = "#F2F2F2";
        this.loanRatioCanvasContext.arc(105,75,3,0,2*Math.PI);
        this.loanRatioCanvasContext.fill();
        this.loanRatioCanvasContext.closePath();
    }
}


