// let name="Nicat"

// let result=name.length
// //1- length methodu bir elementin uzunluğunu tapmaq üçün istifadə olunan methoddur.
// console.log("result", result);

// --------------------------------------------------------------------------------------------------------

// let name1="Nicat"

// //2- charAt methodu spesifik bir index-də olan elementi göstərmək üçün istifadə olunur.
// let letter= name1.charAt(0)

// console.log(letter);

// --------------------------------------------------------------------------------------------------------

// let name2="Nicat"
// //3- charCodeAt methodu spesifik bir index-də olan elementin Unicode-nu göstərmək üçün istifadə olunur.
// let number=name2.charCodeAt(0)

// console.log(number);

// --------------------------------------------------------------------------------------------------------

// let name3="Nicat"
// // 4- at mehtodu verilmiş index-dəki elementi göstərmək üçün istifadə olunur.
// let letter1= name3.at(2)
// console.log(letter1);

// --------------------------------------------------------------------------------------------------------

// let name4="Salam Aleykum"
// // 5- slice methodu verilmiş aralıqdakı elementləri çıxarmaq üçün istifadə olunan methoddur.
// let part=name4.slice(1,4)

// console.log(part);

// --------------------------------------------------------------------------------------------------------

// let name5="Nicat Mehtizade"
// //6- substring methodu verilmiş aralıqdakı elementi çıxarır. Slice ilə arasındakı fərq slice-da mənfi dəyər verə bildiyimiz halda, burda verilən mənfi dəyər 0 olaraq qəbul edilir.
// let part1=name5.substring(2,4)

// console.log(part1);

// --------------------------------------------------------------------------------------------------------

// let name6="Nicat Mehtizade"
// //7- substr methodu ilkin verilmiş index-dən sonra neçə elementi seçə biləcəyimiz bir methoddur. Slice ve substringdə verilmiş index aralığı arasında götürürdü ama substr-da verilmiş indexdən sonrakı elementləri say ilə götürürük. Substr köhnə method olduğu üçün istifadə olunmur və ona görə üzərindən xət çekilmiş olaraq göstərilib.
// let part2=name6.substr(1,7)

// console.log(part2);

// --------------------------------------------------------------------------------------------------------


// let name7="nicat"
// //8- toUpperCase methodu verilmiş string-i böyük hərflər şəklində təqdim edir.
// let UpperName=name7.toUpperCase()

// console.log(UpperName);

// --------------------------------------------------------------------------------------------------------

// let name8="NICAT"
// //9- toLowerCase methodu verilmiş string-i kiçik hərflərlər şəklində təqdim edir.
// let lowerName=name8.toLowerCase()

// console.log(lowerName);

// --------------------------------------------------------------------------------------------------------

// let name9="Nicat"
// let surname="Mehtizade"
// let age="21"
// //10- concat methodu verilmiş 2 string-i bir sətirdə birləşdirmək üçün istifadə olunur.
// let fullName=name9.concat(surname).concat(age)

// console.log(fullName);

// --------------------------------------------------------------------------------------------------------

// let greet="             Hello Everyone"

// //11- trim() methodu tam sətirin başından başladır yəni əgər başlanğıcdan boşluq varsa onları silir və göstərir. trimStart()-da bu işi görür ama trimEnd() isə sondakı boşluqları silir.
// let result1=greet.trim()
// let result2=greet.trimEnd()
// let result3=greet.trimStart()

// console.log(greet);
// console.log(result1);
// console.log(result2);
// console.log(result3);

// --------------------------------------------------------------------------------------------------------


// let text="5"
// //12- padStart verilmiş elementin özünə veriləni əlavə edir.padEnd sonuna.repeat isə veriləni təkrarlayır.
// let padded=text.padStart(3,"0")
// let padded2= text.padEnd(4,"Salamasasa")
// let again= text.repeat(2)

// console.log(padded);
// console.log(padded2);
// console.log(again);

// --------------------------------------------------------------------------------------------------------

// let name11="Nicat Mehtizade Nicat Ayxan Mehdi Nicat"
// //13- replace verilmiş stringdə istədiyimiz sözü başqa bir sözlə əvəz etmək üçün istifadə olunur. replaceAll isə bütün stringə bunu edir. Split isə verilmiş strində istədiyimiz yerləri ayırıb başqa bir element kimi array-in içində göstərir.
// let change=name11.replace("Nicat", "Ayxan")
// let change1=name11.replaceAll("Nicat", "Miri")
// let change2=name11.split(" ")

// console.log(change);
// console.log(change1);
// console.log(change2);

// --------------------------------------------------------------------------------------------------------


// let name12="Nicat Mehtizade"
// //14- starsWith methodu verilmiş stringin başlanğıcı yeni verdiyimiz elemtlə başlayıb-başlamadığını yoxlamaq üçün istifadə olunur.endsWith isə stringin sonunu yoxlamaq üçündür. İncludes isə verilmiş stringin daxilində olanı yoxlamaq üçündür.
// let check=name12.startsWith("Nicat")
// let check1=name12.endsWith("Mehtizade")
// let check2=name12.includes("B")

// console.log(check);
// console.log(check1);
// console.log(check2);

// --------------------------------------------------------------------------------------------------------


// let name13="Nicat Mehtizade Nicat Mehtizade"
// //15- indexOf methodu verilmiş stringin başlanğıcından istədiyimiz stringin neçənci indexdə başladığımızı tapır.lastİndexOf isə stringin sonundan tapır.
// let index=name13.lastIndexOf("Nicat")
// let index1=name13.indexOf("Mehtizade")

// console.log(index);
// console.log(index1);

// --------------------------------------------------------------------------------------------------------
                                                //Tasks
// //1)

// let findLength=(string)=>{
//     console.log(string.length);
// }
// findLength("Salam Necesen?")



// // --------------------------------------------------------------------------------------------------------

// //2)

// let findLetter=(letter,string)=>{
//         if(string.includes(letter)){
//             console.log(`Bu hərf ${string.indexOf(letter)+1}-ci indexdə yerləşir`);
//         }
//         else{
//             console.log(`Bu hərf yoxdur`);
//         }
//     }
    
//     findLetter("l", "Salam")


// // --------------------------------------------------------------------------------------------------------


// //3)

// let findUniCode=(letter,string)=>{
//     console.log(string.charCodeAt(letter));
// }

// findUniCode("l", "Salam")

// // --------------------------------------------------------------------------------------------------------

// //4)

// let makeBigger=(string)=>{
//     console.log(string.toUpperCase());
// }

// makeBigger("salam")

// // --------------------------------------------------------------------------------------------------------

// //5)

// let makeSmaller=(string)=>{
//     console.log(string.toLowerCase());
// }

// makeSmaller("SALAM")

// // --------------------------------------------------------------------------------------------------------

// //6)

// let deleteGap=(string)=>{
//     console.log(string.trim());
// }

// deleteGap("         Hello           ")

// // --------------------------------------------------------------------------------------------------------


// //7)

// let changeWord=(string,word,changeWord)=>{
//     console.log(string.replace(word,changeWord));
// }

// changeWord("Salam Nicat Mehtizade Nicat","Nicat","Kanan")


// // --------------------------------------------------------------------------------------------------------

// //8)

// let mirror=(string)=>{
//     let reversed="";
//     for(i=string.length-1;i>=0;i--){
//         // reversed+=string[i]
//         reversed=reversed.concat(string[i])

//     }
//     console.log(reversed);


// }

// mirror("Salam")

// // --------------------------------------------------------------------------------------------------------

// //9)

// let changeLetterSize=(string)=>{
//   return string.split("").map(char=>{
//     if(char===char.toUpperCase()){
//         return(char.toLowerCase());
//     }
//     else{
//         return(char.toUpperCase());
//     }
  

//   }
  
// ).join("")
// }

// console.log(changeLetterSize("LnNAIhBjB"))


// // --------------------------------------------------------------------------------------------------------

// //9)

// let deleteNumber=(string)=>{
//     let letter=""
//     let number=0
//     for(i=0;i<string.length;i++){
//         if(string[i]*1==string[i]){
//             number+=string[i]
//         }
//         else{
//             letter+=string[i]
//         }

//     }
//     console.log(letter);

// }

// deleteNumber("asq13231asdad123aw1assd")

// // --------------------------------------------------------------------------------------------------------


// //10)

// let word=(string)=>{
//     console.log(string.split(" ").map(string=>string.charAt(0).toUpperCase()+string.slice(1)).join(" ")); 
// }

// word("sALam mEnim aDim nIcATdir")

// // --------------------------------------------------------------------------------------------------------

// //11)

// let findNumAndLetter=(string)=>{
//     let number=0
//     let letter=0
//     for(i=0;i<string.length;i++){
//         if(string[i]*1==string[i]){
//             number++
//         }
//         else{
//             letter++
//         }
//     }
//     console.log(number,letter);
// }

// findNumAndLetter("saldaksld123rn12312sad")

// // --------------------------------------------------------------------------------------------------------

// //12)

// let deletegap=(string)=>{
//     console.log(string.split(" ").join(""));
// }

// deletegap(" asdnas a aosidaoisda qsqeqse ")

// // --------------------------------------------------------------------------------------------------------

// //13)

// let changeWordsPlaces=(string)=>{
//     let words= string.split(" ")
//     if(words.length>1){
//     let swap=words[0];
//     words[0]=words[words.length-1];
//     words[words.length-1]=swap;
    
  
// }
// console.log(words.join(" "));
// }

// changeWordsPlaces("salam men nicat")

// // --------------------------------------------------------------------------------------------------------

//1)

let name=(string)=>{
    console.log(string.length);
}

name("salam necesen ne var ne yox")

// // --------------------------------------------------------------------------------------------------------

//2)

let findLetter=(string,letter)=>{

   console.log(string.indexOf(letter)+1);

}

findLetter("Salam","m")

// // --------------------------------------------------------------------------------------------------------

//3)

let findUniCode=(letter,string)=>{
    console.log(string.charCodeAt(letter));                 //Burda niyə birinci stringi yazanda işləmədi?
}

findUniCode("Salam Necesen","N")

// // --------------------------------------------------------------------------------------------------------

//4)

let makeBiggerWords=(string)=>{
    console.log(string.toUpperCase());
}

makeBiggerWords("salam")

// // --------------------------------------------------------------------------------------------------------

//5)

let makeSmallerWords=(string)=>{
    console.log(string.toLowerCase());
}

makeSmallerWords("Salam")

// // --------------------------------------------------------------------------------------------------------

//6)

let deleteGap=(string)=>{
    console.log(string.trim());
}

deleteGap("     Salam Necesen         ")

// // --------------------------------------------------------------------------------------------------------

//7)

let changeWord=(string,name,changeWord)=>{
    console.log(string.replace(name,changeWord));
}

changeWord("Salam Necesen Nicat","Nicat","Cavansir")

// // --------------------------------------------------------------------------------------------------------

//8)

let reverseWord=(string)=>{
    reverse=""
    for(i=string.length-1;i>=0;i--){
        reverse+=string[i]
    }
    console.log(reverse);

}

reverseWord("Salam Necesen")


// // --------------------------------------------------------------------------------------------------------

//9)

let changeSizeLetters=(string)=>{
    return string.split("").map(char=>{
        if(char==char.toUpperCase()){
                return char.toLowerCase()
        }
        else{
            return char.toUpperCase()
        }
    }).join("")
}

console.log(changeSizeLetters("sAlAm NeCesEEnNnnn"))

// // --------------------------------------------------------------------------------------------------------


//9)

let removeNum=(string)=>{
    let letter= " ";
    let number=0
    for(i=0;i<string.length;i++){
        if(string[i]*1==string[i]){
            number+=string[i]
        }
        else{
            letter+=string[i]
        }

    }
    console.log(letter);

}

removeNum("saib31ub1u3bsdi123sada123aubd3")

// // --------------------------------------------------------------------------------------------------------

//10)

let bigFirstLetter=(string)=>{
    console.log(string.split(" ").map(string=>string.charAt(0).toUpperCase()+string.slice(1)).join(" "))
}

console.log(bigFirstLetter("sAlam mEn niCaT"))

// // --------------------------------------------------------------------------------------------------------

//11)

let countNumAndLetter=(string)=>{
    let number=0
    let letter=""
    for(i=0;i<string.length;i++){
        if(string[i]*1==string[i]){
            number++
        }
        else{
            letter++
        }
    }
    console.log(number, letter);
}

countNumAndLetter("asdad13casd13")

// // --------------------------------------------------------------------------------------------------------

//12)

let deleteGaps=(string)=>{
    console.log(string.split(" ").join(""));
}

deleteGaps("  sasg lasdmal qwe  1231 asda   a")

// // --------------------------------------------------------------------------------------------------------

//13)

let changeWordPlaces=(string)=>{
    let word=string.split(" ")

    let swap=word[0];
    word[0]=word[word.length-1];
    word[word.length-1]=swap;
    console.log(word.join(" "));

}
changeWordPlaces("Salam Men Nicat")