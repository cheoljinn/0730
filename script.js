const containers = document.querySelectorAll('.image-container');

containers.forEach(container => {
    const image = container.querySelector('.image');
    const gif = image.getAttribute('data-gif'); // GIF 경로
    const staticSrc = image.getAttribute("src"); // 정적 이미지 경로

    container.addEventListener('click', () => {
        // 이미 재생 중인 GIF라면 정적 이미지로 복구
        if (image.src.endsWith(gif)) {
            image.src = staticSrc;
            console.log("a");
            resetActiveStates(); // 다른 이미지 상태도 초기화
            return;
        }

        // 모든 이미지 컨테이너를 초기 상태로 복원
        resetActiveStates();

        // 클릭된 이미지 확대 및 GIF로 변경
        image.src = gif;
        container.classList.add('active');

        // 다른 이미지들은 축소
        containers.forEach(otherContainer => {
            if (otherContainer !== container) {
                otherContainer.classList.add('shrink');
            }
        });
    });
});

// 모든 이미지 컨테이너 상태 초기화 함수
function resetActiveStates() {
    containers.forEach(container => {
        const image = container.querySelector('.image');
        const staticSrc = image.src.replace('.gif', '.png'); // 기본 경로 복구
        image.src = staticSrc; // GIF를 정적 이미지로 변경
        container.classList.remove('active');
        console.log("b");
        container.classList.remove('shrink');
    });
}
