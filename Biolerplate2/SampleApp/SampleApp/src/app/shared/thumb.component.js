"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ThumbComponent = (function () {
    function ThumbComponent() {
        this.ratingClicked = new core_1.EventEmitter();
    }
    ThumbComponent.prototype.ngOnChanges = function () {
        this.thumbWidth = this.rating * 86 / 5;
    };
    ThumbComponent.prototype.onClick = function () {
        this.ratingClicked.emit("The rating " + this.rating + " was clicked");
    };
    return ThumbComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ThumbComponent.prototype, "rating", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ThumbComponent.prototype, "ratingClicked", void 0);
ThumbComponent = __decorate([
    core_1.Component({
        selector: 'acw-thumb',
        templateUrl: './thumb.component.html',
        styleUrls: ['./thumb.component.css']
    })
], ThumbComponent);
exports.ThumbComponent = ThumbComponent;
//# sourceMappingURL=thumb.component.js.map