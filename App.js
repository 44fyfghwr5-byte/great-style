import React, {useState} from "react";
import {SafeAreaView,View,Text,StyleSheet,TouchableOpacity,ScrollView,Image,TextInput} from "react-native";

const products=[
{id:1,name:"Classic Black T-Shirt",price:2490,cat:"Футболки",img:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800"},
{id:2,name:"Premium White T-Shirt",price:2790,cat:"Футболки",img:"https://images.unsplash.com/photo-1583743814966-8936f37f4f4c?w=800"},
{id:3,name:"Urban Black Hoodie",price:5490,cat:"Худи",img:"https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800"},
{id:4,name:"Black Jeans",price:6990,cat:"Брюки",img:"https://images.unsplash.com/photo-1542272604-787c3835535d?w=800"},
{id:5,name:"White Sneakers",price:7990,cat:"Обувь",img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800"}
];

export default function App(){
 const [page,setPage]=useState("home");
 const [cart,setCart]=useState([]);
 const [search,setSearch]=useState("");

 const add=p=>setCart([...cart,p]);

 const list=products.filter(p=>p.name.toLowerCase().includes(search.toLowerCase()));

 return(
  <SafeAreaView style={s.safe}>
   <View style={s.container}>

    {page==="home"&&(
     <ScrollView>
      <View style={s.hero}>
       <Text style={s.small}>MEN'S FASHION</Text>
       <Text style={s.logo}>GREAT STYLE</Text>
       <Text style={s.sub}>Стиль начинается здесь.</Text>
       <TouchableOpacity style={s.btn} onPress={()=>setPage("catalog")}>
        <Text style={s.btnText}>Смотреть каталог</Text>
       </TouchableOpacity>
      </View>

      <Text style={s.title}>Новинки</Text>

      <View style={s.grid}>
       {products.slice(0,4).map(p=>
        <View style={s.card} key={p.id}>
         <Image source={{uri:p.img}} style={s.img}/>
         <Text style={s.name}>{p.name}</Text>
         <Text style={s.price}>{p.price} ₽</Text>
         <TouchableOpacity style={s.add} onPress={()=>add(p)}>
          <Text style={s.addText}>Добавить</Text>
         </TouchableOpacity>
        </View>
       )}
      </View>
     </ScrollView>
    )}

    {page==="catalog"&&(
     <View style={{flex:1}}>
      <Text style={s.title}>Каталог</Text>
      <TextInput
       style={s.search}
       placeholder="Поиск одежды..."
       value={search}
       onChangeText={setSearch}
      />
      <ScrollView>
       {list.map(p=>
        <View style={s.row} key={p.id}>
         <Image source={{uri:p.img}} style={s.rowImg}/>
         <View style={{flex:1}}>
          <Text style={s.name}>{p.name}</Text>
          <Text style={s.price}>{p.price} ₽</Text>
          <TouchableOpacity style={s.add} onPress={()=>add(p)}>
           <Text style={s.addText}>В корзину</Text>
          </TouchableOpacity>
         </View>
        </View>
       )}
      </ScrollView>
     </View>
    )}

    {page==="cart"&&(
     <View style={{flex:1}}>
      <Text style={s.title}>Корзина</Text>
      {cart.length===0?
       <Text style={s.empty}>Корзина пуста</Text>:
       cart.map((p,i)=>
        <View style={s.cart} key={i}>
         <Text style={s.name}>{p.name}</Text>
         <Text style={s.price}>{p.price} ₽</Text>
        </View>
       )
      }
     </View>
    )}

    {page==="profile"&&(
     <View>
      <Text style={s.title}>Профиль</Text>
      <View style={s.profile}>
       <Text style={s.profileLogo}>GS</Text>
      </View>
      <Text style={s.logo2}>GREAT STYLE</Text>
      <Text style={s.empty}>Мужская одежда и обувь.</Text>
     </View>
    )}

    <View style={s.nav}>
     <TouchableOpacity onPress={()=>setPage("home")}>
      <Text>⌂{"\n"}Главная</Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={()=>setPage("catalog")}>
      <Text>▦{"\n"}Каталог</Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={()=>setPage("cart")}>
      <Text>🛒{"\n"}Корзина ({cart.length})</Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={()=>setPage("profile")}>
      <Text>♙{"\n"}Профиль</Text>
     </TouchableOpacity>
    </View>

   </View>
  </SafeAreaView>
 );
}

const s=StyleSheet.create({
safe:{flex:1,backgroundColor:"#fff"},
container:{flex:1,padding:16},
hero:{backgroundColor:"#111",borderRadius:24,padding:28,marginBottom:25},
small:{color:"#aaa",letterSpacing:2},
logo:{color:"#fff",fontSize:34,fontWeight:"900",marginTop:8},
sub:{color:"#ddd",marginTop:8},
btn:{backgroundColor:"#fff",padding:14,borderRadius:12,marginTop:22,alignSelf:"flex-start"},
btnText:{fontWeight:"700"},
title:{fontSize:28,fontWeight:"900",marginVertical:16},
grid:{flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between"},
card:{width:"48%",backgroundColor:"#f5f5f5",borderRadius:15,padding:8,marginBottom:14},
img:{width:"100%",height:170,borderRadius:12},
name:{fontWeight:"700",marginTop:8},
price:{fontWeight:"900",fontSize:16,marginTop:5},
add:{backgroundColor:"#111",padding:10,borderRadius:9,marginTop:8,alignItems:"center"},
addText:{color:"#fff",fontWeight:"700"},
search:{backgroundColor:"#f2f2f2",padding:14,borderRadius:12},
row:{flexDirection:"row",marginBottom:15,padding:8,backgroundColor:"#f5f5f5",borderRadius:14},
rowImg:{width:110,height:130,borderRadius:10,marginRight:12},
cart:{padding:16,borderBottomWidth:1,borderColor:"#ddd"},
empty:{textAlign:"center",color:"#777",marginTop:30},
profile:{width:100,height:100,borderRadius:50,backgroundColor:"#111",alignItems:"center",justifyContent:"center",alignSelf:"center",marginTop:30},
profileLogo:{color:"#fff",fontSize:32,fontWeight:"900"},
logo2:{fontSize:24,fontWeight:"900",textAlign:"center",marginTop:15},
nav:{position:"absolute",bottom:8,left:8,right:8,height:65,borderRadius:18,borderWidth:1,borderColor:"#ddd",backgroundColor:"#fff",flexDirection:"row",justifyContent:"space-around",alignItems:"center"}
});
