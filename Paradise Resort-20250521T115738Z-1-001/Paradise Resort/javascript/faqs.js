        // FAQ Toggle Functionality
        document.querySelectorAll('.faq-question').forEach(item => {
            item.addEventListener('click', () => {
                const parent = item.parentElement;
                parent.classList.toggle('active');
                const answer = parent.querySelector('.faq-answer');
                answer.style.maxHeight = answer.style.maxHeight ? null : `${answer.scrollHeight}px`;
            });
        });

        // Category Filtering
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const category = btn.dataset.category;
                document.querySelectorAll('.faq-group').forEach(group => {
                    group.classList.contains(category) ? 
                    group.classList.add('show') : 
                    group.classList.remove('show');
                });
            });
        });

        const observerOptions = { threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }
            });
        }, observerOptions);

        document.querySelectorAll('.faq-item').forEach(element => {
            element.style.opacity = "0";
            element.style.transform = "translateY(20px)";
            element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
            observer.observe(element);
        });
