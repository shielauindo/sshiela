const posts = document.querySelectorAll('.post-card');
const paginationLinks = document.querySelectorAll('.page-number, .next-page');

paginationLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const index = parseInt(this.getAttribute('data-index'));

        // Hide all posts
        posts.forEach(post => post.style.display = 'none');

        // Show the selected post
        posts[index].style.display = 'block';

        // Update active pagination link
        paginationLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});
