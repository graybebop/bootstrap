const MENU_LIST = [
	{
		menuGrpID: "GRP-PUBLISH-TEST",
		menuGrpNm: "한글 메뉴",
		items: [
			{
				menuId: "PUBLISH LOGIN",
				menuNm: "로그인 페이지",
				path: "/publish/login/LoginPage",
			},
			{
				menuId: "PUBLISH SVG",
				menuNm: "SVG 뷰어",
				path: "/SVGViewer",
			},
			{
				menuId: "PUBLISH Form",
				menuNm: "폼페이지",
				path: "/publish/sample/FormPage",
			},
			{
				menuId: "PUBLISH CARD",
				menuNm: "카드",
				path: "/publish/sample/CardPage",
			},
			{
				menuId: "PUBLISH CARD",
				menuNm: "slot test",
				path: "/publish/sample/ParentComponent",
			},
		],
	},
];

export default {
	getMenus: function () {
		const menus = {
			groupId: "GRP-PUBLISH",
			groupName: "퍼블 화면",
			menuList: MENU_LIST,
		};
		return menus;
	},
};
