import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import "../App.css"


const file_name = [
    'about.md',
    "framework.md",
    "language.md"
]
function Markdown(file){
    const [post,setPost]=useState("")
    useEffect(()=>{
        import(`../markdown/${file}`)
        .then(res=>{
            fetch(res.default)
                .then(res=>res.text())
                .then(res=>setPost(res))
                .catch(err=>console.log(err))
        })
        .catch(err=>console.log(err))
    })
    return post
}


function Text(){
    return (
        <div className="content">
            <div>
                <p><ReactMarkdown rehypePlugins={[rehypeRaw]} children={Markdown(file_name[0])}/></p>
            </div>
        </div>
    );
}

function FramText(){
    return (
        <div className="content" >
            <div>
                <p><ReactMarkdown rehypePlugins={[rehypeRaw]} children={Markdown(file_name[1])}/></p>
            </div>
        </div>
    );
}

function LanguageText(){
    return(
        <div className="content">
            <div>
                <p><ReactMarkdown rehypePlugins={[rehypeRaw]} children={Markdown(file_name[2])}/></p>
            </div>
        </div>
    )
}


export {Text,FramText,LanguageText}