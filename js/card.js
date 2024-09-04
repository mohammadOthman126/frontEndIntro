var images=[
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcVArxUrFtOvKGe6CaZt01LOYvWGU66dhFu3FBJj0QDakPWCGLILe8yeRgjw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgzoJ-Y7kUPgXflPf9e66SKtA4-49aleM-lxIk3A9OYdLYrhpDtauISNdB3A&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN7h1-1xKRLeAbS1La46thkbRAmCLJO6OmWDumFpYn7xDSPzptpMF6RBU1-g&s",
  "https://thumbs.dreamstime.com/b/sliced-banana-isolated-white-background-58835288.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkzda-rJ_6HJq6sNvOYyVjOh48GjQFHJ83Wg&s",
  "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTX5yogzJ56j4NwVzm4iNGYy5bqQKONotSa4VrsqU66tRDC6MNfQmS1HLir8_u4nCtbUdDubd2HyTnp_siMWrB9zOzrCQfQI1zvy9GekIA",
  "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR0K9TKAoeFKccwYgHoR_gUj3Er-y3fxeUAm-e66Mfpofg17njp",
  "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT8AS3Q4CAzi8xMe5NaAZ_WfjLlioGWzRURdfAWRu-Lprqex2xf",
  "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTXqmhSi6_90FLY2eOPFlKucO3yISzVDTz0zcCWEpchskxp_aGoErgbvJEoLJgZJgJ3"

]
var titles=["orange","apple","bannana","mango","watermelon","mohh","kiwi","ahmad","mostafa"]
var item = document.getElementsByClassName('gg');

var j=0;

function nextItem(){
    if(j>titles.length-4){
        alert("no more item")
        return

    }
    for(var i=0 ;i<item.length;i++){
        item[i].children[1].src=images[j+3]
        item[i].children[2].innerHTML=titles[j+3]
        j++
    }
}