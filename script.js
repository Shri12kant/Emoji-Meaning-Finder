const EmojiBox=document.querySelector("#Emoji");
const MeaningBox=document.querySelector("#meaningBox");
const EmojiList=document.querySelector("#emojiList")

let emojiDictionary={
    "😊": "Smiling Face",
    "😂": "Laughing",
    "❤️": "Love",
    "🔥": "Fire",
    "😢": "Sad",
    "👍": "Thumbs Up",
    "🎉": "Celebration"
 }
 for (let emoji in emojiDictionary) {
    let span = document.createElement("span");
    span.textContent = emoji;
    span.style.fontSize = "2rem";
    span.style.margin = "10px";
    span.style.cursor = "pointer";

    span.addEventListener("click", () => {
        EmojiBox.value = emoji;
        MeaningBox.value = emojiDictionary[emoji];
    });
    EmojiList.appendChild(span);
 }
EmojiBox.addEventListener("input" ,function(){
    let emoji=EmojiBox.value;
       MeaningBox.value=emojiDictionary[emoji] || "Emoji Not Found "
})