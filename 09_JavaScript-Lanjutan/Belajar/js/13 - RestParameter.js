//Basic Rest Parameter
function Mahasiswa(id, ...bio){
    this.id = id;
    this.bio = bio;
    this.showBio = ()=>{
        const Container = document.querySelector(".LayoutParent:nth-child(1) > div:nth-child(3)");

        Container.innerHTML = "";
        for (const b of this.bio) { Container.innerHTML += `<p> ${b} </p> \n`; }
    }
}

mhs1 = new Mahasiswa("1803015106", "Rangga Wiraguna", "Informatika", "2018", "Jakarta", 3.65, "100sks");
mhs1.showBio();




