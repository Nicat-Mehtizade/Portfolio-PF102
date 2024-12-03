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





