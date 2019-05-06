webpackJsonp([4],{64:function(n,e){n.exports="\n## Props\n\n\u901a\u8fc7 Props \u5411\u5b50\u7ec4\u4ef6\u4f20\u9012\u6570\u636e\uff0c\u6bd4\u5982\uff1a\n\n```jsx\nimport { WeElement, define, render } from 'omi'\n\ndefine('my-element', class extends WeElement {\n  render(props) {\n    return (\n      <h1>Hello, {props.name}!</h1>\n    )\n  }\n})\n```\n\n\u4f7f\u7528\u5143\u7d20:\n\n```jsx\n<my-element name=\"world\"></my-element>\n```\n\n\u4f60\u4e5f\u53ef\u4ee5\u4f20\u4efb\u610f\u7c7b\u578b\u7684\u6570\u636e\u7ed9 props:\n\n```jsx\ndefine('my-element', class extends WeElement {\n  render(props) {\n    return (\n      <h1>Hello, {props.myObj.name}!</h1>\n    )\n  }\n})\n```\n\n\u4f7f\u7528\u5143\u7d20:\n\n```jsx\n<my-element myObj={{ name: 'world' }}></my-element>\n```\n\n\u4f60\u53ef\u4ee5\u901a\u8fc7\u9759\u6001\u5c5e\u6027 `static defaultProps` \u6765\u8bbe\u7f6e\u9ed8\u8ba4\u503c\uff0c\u4f7f\u7528 `static propTypes` \u6765\u8bbe\u7f6e\u7c7b\u578b:\n\n```jsx\ndefine('my-element', class extends WeElement {\n  static defaultProps = {\n\t\tname: 'Omi',\n\t\tmyAge: 18\n  }\n  \n  static propTypes = {\n\t\tname: String,\n\t\tmyAge: Number\n\t}\n\n  render(props) {\n    return (\n      <h1>Hello, {props.name}! Age {props.myAge}</h1>\n    )\n  }\n})\n```\n\n\u9700\u8981\u7279\u522b\u6ce8\u610f\uff0c\u5982\u679c\u4f60\u7684\u81ea\u5b9a\u4e49\u5143\u7d20\u60f3\u8981\u76f4\u63a5\u5728\u5176\u4ed6\u6846\u67b6\u6216\u8005\u65e0\u6846\u67b6\u7684\u60c5\u51b5\u4e0b\u539f\u751f\u4f7f\u7528\uff0c\u8bf7\u4e00\u5b9a\u8981\u52a0\u4e0a `static propTypes` \u624d\u80fd\u751f\u6548\u3002\u6bd4\u5982\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u76f4\u63a5\u5728 body \u4e2d\u4f7f\u7528:\n\n```html\n<body>\n  <my-element name=\"dntzhang\" my-age=\"20\"></my-element>\n</body>\n```"}});
//# sourceMappingURL=4.74864855.chunk.js.map