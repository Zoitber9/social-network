import React from "react";
import s from './Post.module.css'

type PostPropsType = {
    message: string
    like: number
    id:number
}

const Post: React.FC<PostPropsType> = (props) => {
    return (
        <div key={props.id} >
            <div className={s.item}>
                <img alt={'img'}
                    src={'https://sun9-23.userapi.com/impf/c630229/v630229314/38561/Ha65O_k_UbU.jpg?size=570x570&quality=96&sign=6f2ff8314e9d6aa6733c08bbe43dfb50&c_uniq_tag=REU60GrFlW2fjpNaYeB8-sfUKw6RoUVz38fQs5N-VW8&type=album'}/>
                {props.message}
                <div>
                    <span>like</span>
                </div>

                <div>
                    <span>like: {props.like}</span>
                </div>
            </div>
        </div>
    )
}
export default Post