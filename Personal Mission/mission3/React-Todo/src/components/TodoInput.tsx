import { useReducer,useEffect,useState } from "react"
import Button from "./button"
import { ActionType, doInput, initialstate } from "../reducer/Doinput"
import { useTodoStore } from "../provider/TodoProvider"
// 인터페이스 타입 정의
interface ButtonProps{
    onClose:()=>void,
}
const TodoInput = ({onClose}:ButtonProps)=>{
    // 입력 및 select state 가독성 상태 관리
    const [state, dispatch]=useReducer(doInput,initialstate)
    // 입력창 상태 지정
    const [isFormValid, setIsFormValid] = useState<Boolean>(false);
    const{addTodo}=useTodoStore()
    // 타이틀 상태 업데이트
    const handleTitleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        dispatch({type:ActionType.SET_TITLE, payload:e.target.value})
        
    }

    // 콘텐츠 상태 업데이트
    const handleContentChange=(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
        dispatch({type:ActionType.SET_CONTENT, payload: e.target.value})

    }

    // 카테고리 선택 상테 업데이트
    const handleSelectChange=(e:React.ChangeEvent<HTMLSelectElement>)=>{
        dispatch({type:ActionType.SELECT_CATEGORIES, payload:e.target.value})
    }
    
    //상태 관리 및 아이템 추가
    const handleSubmit=()=>{
        addTodo({
            title:state.title,
            content:state.content,
            category:state.category,
            completed:false
        })
        onClose()
    }

    // 입력창 유효성 검사
    useEffect(()=>{
        setIsFormValid(
            state.title.trim() !==""&&state.content.trim() !==""&&state.category.trim()!==""
        )
    },[state.title,state.content,state.category])

    return(
        <div className="fixed z-50 inset-0 flex items-center justify-center bg-[var(--secondary-bg-color)] opacity-95">
          
            <div className="relative flex flex-col bg-white p-[var(--padding-sm)] md:p-[var(--padding-md)] lg:p-[var(--padding-lg)] rounded gap-2 ">
            <div className="absolute top-2 right-2 bg-[var(--secondary-color)] text-[var(--category-text-color-개인)] rounded-md p-1 ">
                <Button onClick={onClose} >닫기</Button>
            </div>
                <section>
                    <input className="border rounded border-[var(--input-border-color)] w-60 md:w-80 p-[var(--padding-sm)] outline-none" value={state.title} onChange={handleTitleChange} placeholder="할 일 제목 작성" ></input>
                </section>
                <section>
                    <textarea className="border rounded border-[var(--input-border-color)] w-80 h-40 outline-none p-[var(--padding-sm)] " value={state.content} onChange={handleContentChange} placeholder="할 일 설명 작성" maxLength={40}></textarea>
                </section>
                <section>
                    <select className=" border rounded border-[var(--input-border-color)] w-80 p-[var(--padding-sm)] outline-none" value={state.category} onChange={handleSelectChange} >
                        <option value="">카테고리 선택</option>
                        <option value="업무">업무</option>
                        <option value="개인">개인</option>
                        <option value="자유">자유</option>
                        <option value="운동">운동</option>
                    </select>
                </section>
                <button disabled={!isFormValid} onClick={handleSubmit} className={`${isFormValid ? "bg-[var(--form-color-completed)] text-[var(--text-color-completed)]" : "bg-[var(--form-color-uncompleted)] text-[var(--text-color-uncompleted)] cursor-not-allowed"} flex justify-center items-center p-2 rounded`}>
                    확인
                </button>
            </div>
        </div>
    )
}
export default TodoInput