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
import { createNoSubstitutionTemplateLiteral } from 'typescript';

var target_list=[0,0,0]
function create_target(){
	target_list=[-1,-1,-1]
	var i=0
	var rand_tmp
	while (i<3){
		rand_tmp=getRandomInt(0,10)
		if(rand_tmp==target_list[0]){continue}
		if(rand_tmp==target_list[1]){continue}
		if(rand_tmp==target_list[2]){continue}
		else{
			target_list[i]=rand_tmp
			i+=1
		}
	}
}
function getRandomInt(min:number, max:number) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
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
		if(number_list[i]==target_list[i]){eat++}
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
		else if ( tl[t_i]>nl[n_i] ){n_i+=1}
		else if ( tl[t_i]<nl[n_i] ){t_i+=1}
	}
	bite-=eat
	return {'eat':eat,'bite':bite}
}

create_target()
/* target_list=[1,2,3] */
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
	if(flag==0){return(<></>)}
	if(flag==1){
	return(
		<Text fontSize='30px'>
			<div className={styles.intro}>
				各桁異なる3桁の<br />
				数字を入力してください<br />
			</div>
		</Text>
	)}
	if(flag==2){
	return(
	<Text fontSize='30px'>
		<div className={styles.intro}>
			{temp}
		</div>
	</Text>
	)}
}

function result(){
	if(flag==0){return(<></>)}
	else{
	return(
		<Text fontSize='30px'>
		<div className={styles.intro}>
			{eat}eat &nbsp; {bite}bite
		</div>
		</Text>
	)}
}

function pushButton(i:number){
	if(data.length<3){setData(data+i)}	//3文字以下なら1文字足す 
	else if(data.length==3){setData(data.slice(0,-1)+i)} //3文字ならば最後の文字を変更
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
			onClick={()=>pushButton(i)}
		>
			{i} 
		</Button>
	</>
)}


function Clear(){
	if(eat=='3'){
	return(
	<>
		<Text fontSize='30px'>
			<div className={styles.intro}>
				GAME &nbsp; CLEAR
			</div>
		</Text>
		<Center>
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
			}}
			>
				Retry
			</Button>
		</Center>
	</>
	)}
	else{return(<></>)}
}

function pushButtonB(){
	setData(data.slice(0,-1))
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
		onClick={pushButtonB}
		>
			B
		</Button>
	</>
)}

function pushButtonGO(){
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
		setTemp(data)
		setData('')
	}
}

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
	onClick={pushButtonGO}
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
		<div>{CreateButton(1)}	{CreateButton(2)}	{CreateButton(3)}	</div>
		<div>{CreateButton(4)}	{CreateButton(5)}	{CreateButton(6)}	</div>
		<div>{CreateButton(7)}	{CreateButton(8)}	{CreateButton(9)}	</div>
		<div>{CreateButtonB()}	{CreateButton(0)}	{CreateButtonGO()}	</div>
	</div>
</Box>
)}

return (
<>
	{App()}
	<Box  bg={color} opacity="0.8" color="#ffffff" className={styles.widebox}>
		<Box>
			<Header />
		</Box>
		<Box  h={500} className={styles.box}>
			<Box className={styles.left} alignItems="left">{Clear()}</Box>
			<Box className={styles.center} alignItems="center" >
				<Box h={100}>{Res() }</Box>
				<Box h={300}>{intro()}</Box>
				<Box h={100}>{result()}</Box>
			</Box>
			<Box className={styles.right} alignItems="self-end">
				<Box></Box>
				<Box 
					display='flex'
					borderWidth='1px' borderRadius='lg' 
					h="70px" w="300px" my="12px"
					alignItems='center'
				>
					<Text  fontSize='40px'>{data}</Text>
				</Box>
				{InputButton()}
			</Box>
		</Box>
		<Box
			className={Styles.cursor2}
			boxShadow='dark-lg'
			p={10}
			h="125px" w="200px"
			bg="000"
			border="1px solid #ffffff" borderRadius="4px"
			m="auto" mt="30px"
			_hover={{ border: "1px solid #FF3333", color:"#FF3333" }}
		>
			<Text fontSize="3xl" fontFamily="cursive">
				<Link href='../'>Home</Link>
			</Text>
		</Box>
		<Box  h={100}></Box>
		<Box>
			<Footer />
		</Box>
	</Box>
</>
);
};

export default Game;


const styles={
	widebox:css`
		width:100%;
		height:max(100vh,860px);
`,
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
