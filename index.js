const navItems = document.querySelectorAll('.nav-item');
const pages = document.querySelectorAll('.page');
// 为每个导航项添加点击事件监听器
for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', function(e) {
        // 阻止默认行为
        e.preventDefault();
        const targetId = this.getAttribute('id');
        // 移除所有导航项的选中状态
        navItems.forEach(item => item.classList.remove('active'));
        // 添加当前导航项的选中状态
        document.getElementById(targetId).classList.add('active');
        // 隐藏所有页面内容
        pages.forEach(page => page.classList.remove('active'));
        // 显示对应的页面内容
        document.getElementById('page-' + targetId).classList.add('active');
        const submenu=document.getElementById(targetId).nextElementSibling;
        console.log(submenu);
        document.querySelectorAll('.submenu').forEach(sub=>sub.classList.remove('show'));
        submenu.classList.add('show');
    });
}

// const Submenu = document.querySelectorAll('.has-submenu');
// for(let I = 0;I<Submenu.length,I++;){
//     Submenu[I].addEventListener('click',function(a){
//         a.preventDefault();
//         const targetId1=this.getAttribute('id');
//         document.querySelectorAll('.submenu').forEach(sub=>sub.classList.remove('show'));
//         console.log('right');
        
//         const submenu = targetId1.nextEventSibling;
//         submenu.classList.add('show');
        
//     })
// }


const collapseBtn = document.getElementById('collapseBtn');
const sidebar = document.querySelector('.sidebar');
collapseBtn.addEventListener('click', function() {
    sidebar.classList.toggle('sidebar-hidden');
    console.log("ok");
});
const overlay = document.querySelector('.overlay');
collapseBtn.addEventListener('click', function() {
    overlay.classList.toggle('overlay-expanded');
});
collapseBtn.addEventListener('click', function() {
    collapseBtn.classList.toggle('container-shifted');
});

