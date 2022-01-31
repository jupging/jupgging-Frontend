# jupgging-Frontend
GDSC Winter Hack - Plogging Application jupgging Front 


![image](https://user-images.githubusercontent.com/86418674/151739009-92777496-70b0-414b-8a5b-c92493bd94dd.png)


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
