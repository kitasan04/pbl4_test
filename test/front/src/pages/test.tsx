import React,{useState} from 'react';
import {App} from './snow'
import { Input, useColorModeValue } from '@chakra-ui/react'
import { Box, Text, Divider, Grid, GridItem } from "@chakra-ui/layout";
import { Header } from "./header";
import { Footer } from "./footer";
import Styles from './css/cursor.module.css';
import Link from 'next/link';
import {css} from '@emotion/css';
import { Button, ButtonGroup  } from '@chakra-ui/react'
import { Center, Square, Circle  } from '@chakra-ui/react'

var target_list=[0,0,0]
function create_target(){
    var i=0
    var rand=Math.random()
    while (i<3){
        rand*=10
        var rand_tmp=Math.trunc(rand)
        if (!(rand_tmp in target_list)){
            target_list[i]=rand_tmp
            i+=1
        rand-=rand_tmp
        }
    }
}

function nume(number_str:string){
    var eat=0
    var bite=0
    var number=parseInt(number_str)
    var number_list=[0,0,0]

for(var i=0;i<3;++i){
	number_list[2-i]=number%10
	number/=10
	number=Math.trunc(number) 
}
for(var i=0;i<3;++i){
	if(number_list[i]==target_list[i]){
		eat++
	}
}

var tl=target_list
var nl=number_list
tl.sort()
nl.sort()
var t_i=0
var n_i=0

while ( t_i<3 && n_i<3 ){
if ( tl[t_i]==nl[n_i] )
{
	bite+=1
	t_i+=1
	n_i+=1
}
else if ( tl[t_i]>nl[n_i] )
{
	n_i+=1
}
else if ( tl[t_i]<nl[n_i] ){
	t_i+=1
}
}
bite-=eat

return {'eat':eat,'bite':bite}
}
create_target()
target_list=[1,2,3]
var eat=nume('312').eat
var bite=nume('312').bite

export const intro = ()=>{
return(
<div className={styles.intro}>
各桁異なる3桁の数字を当てよう!<br/>
予想した数字をEnter<br/><br/>
eat := 数字が合っている<br/>
	桁が合っている<br/>
bite:= 数字は合っている<br/>
	 桁が間違えている
</div>

)
}



export const Game = () => {
    const color = useColorModeValue("#006400", "#000")
const [data, setData] = React.useState('');
const [temp, setTemp] = React.useState('');
const [eat, setEat] = React.useState('');
const [bite, setBite] = React.useState('');
const [flag, setFlag] = React.useState(0);
const [clearflag, setClearFlag] = React.useState(0);


function Res(){
if(flag==0){
return(<></>)
}

if(flag==1){
return(

<Text fontSize='30px'>
<div className={styles.intro}>
各桁異なる3桁の<br />
数字を入力してください
</div>
</Text>
)
}
if(flag==2){
return(
<Text fontSize='30px'>
<div className={styles.intro}>
{temp}
</div>
</Text>

)
}
}

function result(){
if(flag==0){
return(<></>)
}

else{
return(

<Text fontSize='30px'>
<div className={styles.intro}>
{eat}eat &nbsp; {bite}bite
</div>
</Text>
)
}
}
function CreateButton(i:number){
return(
<>
<Button
size='md'
height='100px'
width='100px'
border='2px'
borderColor='white'
colorScheme='green'
onClick={()=>{ 
if(data.length<3){
setData(data+i) 
}
else if(data.length==3){
setData(data.slice(0,-1)+i) 
}
}}
>
{i} 
</Button>
</>
)}


function Clear(){
if(clearflag==0){
return(<></>)
}
else{
return(
<>
	<Text fontSize='30px'>
		<div className={styles.intro}>
			GAME &nbsp; CLEAR
		</div>
	</Text>
	<Button
	className={styles.intro}
	size='md'
	height='50px'
	width='100px'
	border='2px'
	borderColor='white'
	colorScheme='red'
onClick={()=>{
	create_target()
	setData('')
	setTemp('')
	setEat('')
	setBite('')
	setFlag(0)
	setClearFlag(0)

}}
	
	>
		Retry
	</Button>
</>

)

}
}

function CreateButtonB(){
return(
<>
<Button
size='md'
height='100px'
width='100px'
border='2px'
borderColor='white'
colorScheme='blue'
onClick={()=>{
setData(data.slice(0,-1))

}}
>
B
</Button>
</>
)}
function CreateButtonGO(){
return(
<>
<Button
size='md'
height='100px'
width='100px'
border='2px'
borderColor='white'
colorScheme='orange'
onClick={()=>{ 
if(data.length!=3){
setFlag(1)
setData('')
}
else if(data[0]==data[1]||data[0]==data[2]||data[1]==data[2]){
setFlag(1)
setData('')
}
else{
setFlag(2)
setEat(String(nume(data).eat))
setBite(String(nume(data).bite))
if(eat=='3'){
setClearFlag(1)
}
setTemp(data)
setData('')
}
}}
>
GO
</Button>
</>
)}
function InputButton(){
return(
<Box
display='flex'
alignItems='center'

>
<div>
<div>
{CreateButton(1)}
{CreateButton(2)}
{CreateButton(3)}
</div>
<div>
{CreateButton(4)}
{CreateButton(5)}
{CreateButton(6)}
</div>
<div>
{CreateButton(7)}
{CreateButton(8)}
{CreateButton(9)}
</div>
<div>
{CreateButtonB()}
{CreateButton(0)}
{CreateButtonGO()}
</div>
</div>
</Box>

)
}


  return (
<>
	{App()}
	<Box  bg={color} opacity="0.8" color="#ffffff">
		<Box>
			<Header />
		</Box>
		<Box  h={500} className={styles.box}>

		<Box className={styles.left} alignItems="left">
{Clear()}
		</Box>
		<Box className={styles.center} alignItems="center" >
<Box >
{Res()}
</Box>
<Box>
{intro()}
</Box>
<Box>
{result()}
</Box>
		</Box>
		<Box className={styles.right} alignItems="self-end">
<Box>
</Box>
<Box 
display='flex'
borderWidth='1px' borderRadius='lg' 
		h="70px"
		w="300px"
		my="12px"
alignItems='center'
>
<Text  fontSize='40px'>
{data}
</Text>
</Box>
{InputButton()}
		</Box>


		</Box>
		<Box
		className={Styles.cursor2}
		boxShadow='dark-lg'
		p={10}
		h="125px"
		w="200px"
		bg="000"
		border="1px solid #ffffff"
		borderRadius="4px"
		m="auto"
		mt="30px"
		_hover={{ border: "1px solid #FF3333", color:"#FF3333" }}
		>
			<Text fontSize="3xl" fontFamily="cursive">
				<Link href='../'>Home</Link>
			</Text>
			</Box>
			<Box  h={100}>
			</Box>
			<Box>
			<Footer />
		</Box>
	</Box>
</>
);
};

export default Game;


const styles={
	box:css`
		display:flex;
		width:100%;
`,

	intro:css`
		text-align:center;
`,
	left:css`
		width:100%
`,
	center:css`
		width:100%
`,
	right:css`
		width:100%
`,
}
