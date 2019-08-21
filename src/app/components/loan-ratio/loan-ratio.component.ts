import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';

@Component({
    selector: 'loan-ratio',
    templateUrl: './loan-ratio.component.html',
    styleUrls: ['./loan-ratio.component.css']
  })

export class LoanRatioComponent implements OnInit, OnChanges {
    loanRatioCanvasCtx: Array<CanvasRenderingContext2D> = [];
    loanRatioCanvasDoorCtx: CanvasRenderingContext2D;
    loanRatio: number = 0;
    priceStep: number = 10000;
    downPaymentStep: number = 10000;

    @Input() price: number;
    @Output() priceChange = new EventEmitter<number>();
    @Input() downPayment: number;
    @Output() downPaymentChange = new EventEmitter<number>();

    ngOnInit() {
        for(let i = 1; i<=20; i++) {
            let elem = <HTMLCanvasElement> document.getElementById("h" + i);
            this.loanRatioCanvasCtx[i] = elem.getContext("2d");
        }

        this.loanRatioCanvasDoorCtx = (<HTMLCanvasElement> document.getElementById("door")).getContext("2d");
    }

    ngOnChanges() {
        this.loanRatio = (1 - (this.downPayment / this.price)) * 100;
        this.drawHouse();
    }

    incrementPrice() {
        this.priceChange.emit(this.price + this.priceStep);
    }

    decrementPrice() {
        if ((this.price - this.priceStep) < 0) {
            this.priceChange.emit(0);
        }
        else {
            this.priceChange.emit(this.price - this.priceStep);
        }
    }

    incrementDownPayment() {
        this.downPaymentChange.emit(this.downPayment + this.downPaymentStep);
    }

    decrementDownPayment() {
        if ((this.downPayment - this.downPaymentStep) < 0) {
            this.downPaymentChange.emit(0);
        } else {
            this.downPaymentChange.emit(this.downPayment - this.downPaymentStep);
        }
    }

    drawHouse() {
        if (this.loanRatioCanvasDoorCtx) {
            this.loanRatioCanvasDoorCtx.fillStyle = "#FFFFFF";
            this.loanRatioCanvasDoorCtx.fillRect(0, 0, 100, 100);
        }
        this.loanRatioCanvasCtx.forEach((ctx, idx) => {
            //Clear
            ctx.fillStyle = "#FFFFFF";
            ctx.fill();

            ctx.beginPath();
            if(idx == 20) {
                ctx.strokeStyle = "#000000";
                ctx.fillStyle = "#ff0000";
                ctx.moveTo(125, 5);
                ctx.lineTo(175, 5);
                ctx.lineTo(150, 0);
                ctx.lineTo(125, 5);
            }
            else if(idx == 19) {
                ctx.strokeStyle = "#000000";
                ctx.fillStyle = "#ff0000";
                ctx.moveTo(100, 5);
                ctx.lineTo(200, 5);
                ctx.lineTo(175, 0);
                ctx.lineTo(125, 0);
                ctx.lineTo(100, 5);
            }
            else if(idx == 18) {
                ctx.strokeStyle = "#000000";
                ctx.fillStyle = "#ff0000";
                ctx.moveTo(75, 5);
                ctx.lineTo(225, 5);
                ctx.lineTo(210, 0);
                ctx.lineTo(100, 0);
                ctx.lineTo(75, 5);
            }
            else if(idx == 17) {
                ctx.strokeStyle = "#000000";
                ctx.fillStyle = "#ff0000";
                ctx.moveTo(50, 5);
                ctx.lineTo(250, 5);
                ctx.lineTo(230, 0);
                ctx.lineTo(75, 0);
                ctx.lineTo(50, 5);
            }
            else if(idx == 16) {
                ctx.strokeStyle = "#000000";
                ctx.fillStyle = "#ff7f00";
                ctx.moveTo(25, 5);
                ctx.lineTo(275, 5);
                ctx.lineTo(255, 0);
                ctx.lineTo(50, 0);
                ctx.lineTo(25, 5);
            }
            else if(idx == 15) {
                ctx.strokeStyle = "#000000";
                ctx.fillStyle = "#ff7f00";
                ctx.moveTo(0, 5);
                ctx.lineTo(300, 5);
                ctx.lineTo(280, 0);
                ctx.lineTo(25, 0);
                ctx.lineTo(0, 5);
            }
            else if (idx >= 10 && idx <= 14) {
                ctx.strokeStyle = "#000000";
                ctx.fillStyle = "#feff00";
                ctx.moveTo(40, 0);
                ctx.lineTo(260, 0);
                ctx.lineTo(260, 5);
                ctx.lineTo(40, 5);
                ctx.lineTo(40, 0);
            }
            else if (idx < 10) {
                ctx.strokeStyle = "#000000";
                ctx.fillStyle = "#00ff00";
                ctx.moveTo(40, 0);
                ctx.lineTo(260, 0);
                ctx.lineTo(260, 5);
                ctx.lineTo(40, 5);
                ctx.lineTo(40, 0);
            }
            ctx.stroke();

            if(((idx / 20) * 100) <= this.loanRatio) {
                ctx.fill();
            }
        });
    }
}


