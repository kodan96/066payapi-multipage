"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jquery_1 = __importDefault(require("jquery"));
(0, jquery_1.default)(function () {
    (0, jquery_1.default)('.open').on('click', () => {
        (0, jquery_1.default)('nav').slideToggle();
    });
});
//# sourceMappingURL=script.js.map