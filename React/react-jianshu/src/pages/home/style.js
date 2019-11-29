import styled from 'styled-components'

// export const HomeWrapper = styled.div`
// overflow: hidden;
// width: 960px;
// margin: 0 auto;
// `

export const HomeWrapper = styled.div({
  overflow: 'hidden',
  width: '960px',
  margin: '0 auto',
})

export const HomeLeft = styled.div`
float: left;
margin-left: 15px;
padding-top: 15px;
width: 625px;
.banner-img {
  width: 625px;
  height: 270px;
}
`

export const TopicWrapper = styled.div({
  overflow: 'hidden',
  padding: '20px 0 10px 0',
  marginLeft: '-18px',
  color: `${props => props.color}`, // 可以读取到js的变量 通过props传递
  borderBottom: '1px soild #dcdcdc'
})

export const TopicItem = styled.div`
	float: left;
	height: 32px;
	line-height: 32px;
	margin-left: 18px;
	margin-bottom: 18px;
	padding-right: 10px
	background: #f7f7f7;
	font-size: 14px;
	color: ${props => props.color};
	border: 1px solid #dcdcdc;
	border-radius: 4px;
	.topic-pic {
		display: block;
		float: left;
		width: 32px;
		height: 32px;
		margin-right: 10px;
	}
`;

export const ListItem = styled.div`
	overflow: hidden;
	padding: 20px 0;
	border-bottom: 1px solid #dcdcdc;
	.pic {
		display: block;
		width: 125px;
		height: 100px;
		float: right;
		border-radius: 10px;
	}
`;
// 标签模板 style.div 是一个方法 
// function foo(...args) {
		// 自定义 模板字符串 行为
		// console.log(args)
		// [Array(2), 123] 以变量切割 所有字符串放在一个数组 变量放一个数组
		// ["i am ", "", raw: Array(2)]
		// 123
// }
// 调用的时候可以使用两种方式
// 1 
// foo()
// 2 更加灵活的模板字符串
// foo``
// let str = `i am ${123}`
// foo`i am ${123}`

export const ListInfo =	styled.div`
	width: 500px;
	float: left;
	.title {
		line-height: 27px;
		font-size: 18px;
		font-weight: bold;
		color: #333;
	}
	.desc {
		line-height: 24px;
		font-size: 13px;
		color: #999;
	}
`;

export const RecommendWrapper = styled.div`
	margin: 30px 0;
	width: 280px;
`;

export const RecommendItem = styled.div`
	width: 280px;
	height: 50px;
	background: url(${(props) => props.imgUrl});
	background-size: contain;
`;

export const WriterWrapper = styled.div`
	width: 278px;
	border: 1px solid #dcdcdc;
	border-radius: 3px;
	height: 300px;
	line-height: 300px;
	text-align: center;
`;

export const LoadMore = styled.div`
	width: 100%;
	height: 40px;
	line-height: 40px;
	margin: 30px 0;
	background: #a5a5a5;
	text-align:center;
	border-radius: 20px;
	color: #fff;
	cursor: pointer;
`;

export const BackTop = styled.div`
	position: fixed;
	right: 100px;
	bottom: 100px;
	width: 60px;
	height: 60px;
	line-height: 60px;
	text-align: center;
	border: 1px solid #ccc;
	font-size: 14px;
`

