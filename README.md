# jupgging-Frontend
GDSC Winter Hack - Plogging Application jupgging Front 

![image](https://user-images.githubusercontent.com/86418674/151849069-d509b07c-68f5-4dde-abda-d2c10301ec4c.png)


# Navigation 설계

```
<NavigationContainer>
<Stack Navigator>
	<Stack.Sreen name='Home' component={HomeNav}> //메인 홈 
	<Stack.Sreen name='Login' component={LoginNav}>
  <Stack.Sreen name='signin' component={SigninNav}>
  ... // 이부분에 필요한 화면들 추가하기 ex <Stack.Screen name="FeedDetail" component={FeedStackNav} />
  
</Stack Navigator>
</NavigationContainer>
```
