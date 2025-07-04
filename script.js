document.addEventListener('DOMContentLoaded', () => {
    const likeButton = document.getElementById('like-button');
    const likeCountSpan = document.getElementById('like-count');

    let likeCount = parseInt(likeCountSpan.textContent);
    let isLiked = false;

    likeButton.addEventListener('click', () => {
        if (!isLiked) {
            likeCount++;
            likeButton.classList.add('liked');
            isLiked = true;
        } else {
            likeCount--;
            likeButton.classList.remove('liked');
            isLiked = false;
        }

        likeCountSpan.textContent = likeCount;

        // Remove the animation class so it can be re-added on the next click
        if (likeButton.classList.contains('liked')) {
            setTimeout(() => {
                likeButton.querySelector('.icon').style.animation = '';
            }, 300);
        }
    });
});