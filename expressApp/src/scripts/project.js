const projectObj={
    filesPath: "/home/user/",
    projectPath: "Projects",
    componentPath: "Components",
    componentDisplayed: true,
    lateralNavFolder: ["User","Desktop","Documents","Downloads","Projects","Components"],
    lateralNavSection: ["Computer","Devices","Networks"],
    networkDevicesData: [{
        name: "Hard Drive",
        imagePath: "http://localhost:4000/src/images/project/hard-drive.svg"
    },{
        name: "Browse Networks",
        imagePath: "http://localhost:4000/src/images/project/network.svg",
    }],
    componentData: [],
    projectData: [],
    mainContainer: elementCreator({tag:"div", classList:"project-main-container"}),
    componentsTab: elementCreator({tag: "div", classList:"components-tab", text: "Components"}),
    projectTab: elementCreator({tag:"div", classList: "projects-tab", text: "Projects"}),
    filesDeco: elementCreator({tag: "div", classList:"files-deco",text:"Files"}),
    iconsLateralNavContainer: elementCreator({tag:"div", classList:"icons-lateralNav-container"}),
    async componentFetch(){
        await fetch("http://localhost:4000/my-component")
        .then(response=>response.json())
        .then(data=>this.componentData=data);
    },
    async projectFetch(){
        await fetch("http://localhost:4000/my-project")
        .then(response=>response.json())
        .then(data=>this.projectData=data);
    },
    createPathBar(){
        const pathBar= elementCreator({tag: "div", classList: "path-bar-container", text:  this.componentDisplayed?this.filesPath+this.componentPath:this.filesPath+this.projectPath});
        this.mainContainer.appendChild(pathBar)
    },
    createLateralNav(){
        const targetTag= this.mainContainer //document.getElementById(tagId);
        const lateralContainer=elementCreator({tag:"aside"});
        this.lateralNavSection.forEach((item,i)=>{
            lateralContainer.append(elementCreator({tag: "div", classList: `${item.toLowerCase()}-container`}));
            lateralContainer.children[i].append(elementCreator({tag: "h3", text: item}));
        });
        this.lateralNavFolder.forEach((item)=>{

            if(item==="Projects"){
                //const projectFolder=elementCreator({tag: "div", id: "project-folder"});
                const folder=elementCreator({tag: "div",classList: "folder" });
                folder.append(elementCreator({tag: "div", classList: "projects-button", eventFunction: this.changeFolder}));
                folder.children[0].append(elementCreator({tag:"img",classList: "projects-button" ,src:"http://localhost:4000/src/images/project/folder.svg", alt: item}));
                folder.children[0].append(elementCreator({tag: "p", classList: "projects-button",text: item}));
                folder.append(elementCreator({tag: "div", id: item.toLowerCase()}));
                lateralContainer.children[0].appendChild(folder);
            }else if(item==="Components"){
                const folder=elementCreator({tag: "div", classList: "folder"});
                folder.append(elementCreator({tag: "div", classList: "components-button", eventFunction: this.changeFolder}));
                folder.children[0].append(elementCreator({tag:"img", classList: "components-button", src:"http://localhost:4000/src/images/project/folder.svg", alt: item}));
                folder.children[0].append(elementCreator({tag: "p", classList: "components-button", text: item}));
                folder.append(elementCreator({tag: "div", id: item.toLowerCase()}));
                lateralContainer.children[0].appendChild(folder);
            } else{
                const folder=elementCreator({tag: "div"});
                folder.append(elementCreator({tag:"img", src:"http://localhost:4000/src/images/project/folder.svg", alt: item}));
                folder.append(elementCreator({tag: "p", text: item}));
                lateralContainer.children[0].appendChild(folder);
            }
            //lateralContainer.children[0].appendChild(folder);
        });
        this.networkDevicesData.map((item,i)=>{
            lateralContainer.children[1+i].append(elementCreator({tag:"div"}));
            lateralContainer.children[1+i].children[1].append(elementCreator({tag: "img", src: item.imagePath, alt: item.name}));
            lateralContainer.children[1+i].children[1].append(elementCreator({tag: "p", text: item.name}));
        });
        targetTag.children[2].append(lateralContainer);
        targetTag.children[2].append(elementCreator({tag: "div", classList:"icons-container"}))
    },
    createIcons(iconsData, tagId){
        //const iconsContainer= elementCreator({tag: "div", classList:"icons-container"});
        const iconsContainer= document.querySelector(".icons-container")
        console.log(iconsContainer);
        const projectFolder= document.getElementById(tagId);
        iconsData.map((item)=>{
            const projectOrComp= tagId==="components"?item.component_name:item.project_name
            const icon=elementCreator({tag: "a"});
            icon.append(elementCreator({tag: "img", src: item.langages_frameworks_image_path, alt:projectOrComp}));
            icon.append(elementCreator({tag:"p", text:`${projectOrComp.replace(" ","-").toLowerCase()}.${item.langages_frameworks_name}`}));
            const folderIcon=icon.cloneNode(true)
            iconsContainer.append(icon);
            projectFolder.append(folderIcon)
        });
        this.mainContainer.children[2].append(iconsContainer);
    },
    async changeFolder(event){
        const iconsContainer=document.querySelector(".icons-container")
        switch (event.target.classList[0]){
            case "projects-button" || "projects-tab":
                console.log("project");
                const componentFolder= document.getElementById("components")
                await Object.entries(iconsContainer.children).forEach((item)=>{
                    item[1].remove()
                });
                await Object.entries(componentFolder.children).forEach((item)=>{
                    item[1].remove()
                });
                projectObj.createIcons(projectObj.projectData, "projects");
            break;
            case "components-button" || "components-tab":
                console.log("components");
                const projectsFolder= document.getElementById("projects")
                //const iconsContainer=document.querySelector(".icons-container")
                await Object.entries(iconsContainer.children).forEach((item)=>{
                    item[1].remove()
                });
                await Object.entries(projectsFolder.children).forEach((item)=>{
                    item[1].remove()
                });
                projectObj.createIcons(projectObj.componentData, "components");
            break;
        }
    },
    async generateUi(tagId){
        const targetTag=document.getElementById(tagId)
        let sucess=false;
        do{
            await this.componentFetch();
            await this.projectFetch();
            sucess=true;
        }while(!sucess){
            targetTag.prepend(elementCreator({tag:"div", classList:"tab-container"}))
            targetTag.children[0].append(this.projectTab)
            targetTag.children[0].prepend(this.componentsTab)
            targetTag.append(this.mainContainer)
            this.createPathBar()
            this.mainContainer.append(this.filesDeco)
            this.mainContainer.append(this.iconsLateralNavContainer)
            this.createLateralNav()
            this.createIcons(this.componentData, "components")
        };
    },
};
projectObj.generateUi("project-main")