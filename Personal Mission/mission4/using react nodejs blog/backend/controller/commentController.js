"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commentService_1 = __importDefault(require("../service/commentService"));
class CommentController {
    // 댓글 작성 컨트롤러
    saveComment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                if (!req.user) {
                    res.status(401).json({ message: '인증 권한 없음' });
                    return;
                }
                const userId = req.user.user_id;
                const result = yield commentService_1.default.saveComment(userId, data);
                if (result) {
                    res.status(200).json({ message: "댓글 저장 성공" });
                    return;
                }
                res.status(404).json({ message: "댓글 저장 실패" });
            }
            catch (error) {
                res.status(500).json({ error: error.message });
            }
        });
    }
}
exports.default = new CommentController;
