<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<?php wp_body_open(); ?>

	<header class="site-header" id="site-header">
		<div class="header-container">

			<!-- Logo -->
			<div class="logo-wrapper">
				<a href="<?php echo esc_url(home_url('/')); ?>" class="logo-link">
					<span class="logo-text">
						ATELIER<span class="logo-suffix">TEXTILE</span>
					</span>
				</a>
			</div>

			<!-- Desktop Navigation -->
			<nav class="main-navigation" id="main-navigation">
				<?php
				wp_nav_menu(array(
					'theme_location' => 'primary',
					'menu_class'     => 'nav-menu',
					'container'      => false,
					'fallback_cb'    => false,
					'walker'         => new Custom_Nav_Walker()
				));
				?>

				<!-- Contact Button -->
				<a href="#contact" class="btn-contact">
					<span>Contact & devis</span>
					<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
					</svg>
				</a>
			</nav>

			<!-- Mobile Menu Toggle -->
			<button class="menu-toggle" id="menu-toggle" aria-label="Toggle menu">
				<svg class="menu-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<line x1="3" y1="6" x2="21" y2="6"></line>
					<line x1="3" y1="12" x2="21" y2="12"></line>
					<line x1="3" y1="18" x2="21" y2="18"></line>
				</svg>
				<svg class="close-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: none;">
					<line x1="18" y1="6" x2="6" y2="18"></line>
					<line x1="6" y1="6" x2="18" y2="18"></line>
				</svg>
			</button>
		</div>
	</header>

	<script>
		(function() {
			// Header Scroll Effect
			const header = document.getElementById('site-header');
			const menuToggle = document.getElementById('menu-toggle');
			const mainNav = document.getElementById('main-navigation');
			const menuIcon = menuToggle.querySelector('.menu-icon');
			const closeIcon = menuToggle.querySelector('.close-icon');

			// Scroll handler
			function handleScroll() {
				if (window.scrollY > 50) {
					header.classList.add('site-header-scrolled');
				} else {
					header.classList.remove('site-header-scrolled');
				}
			}

			// Mobile menu toggle
			menuToggle.addEventListener('click', function() {
				const isOpen = mainNav.classList.contains('toggled');

				if (isOpen) {
					mainNav.classList.remove('toggled');
					header.classList.remove('mobile-active');
					menuIcon.style.display = 'block';
					closeIcon.style.display = 'none';
					document.body.style.overflow = '';
				} else {
					mainNav.classList.add('toggled');
					header.classList.add('mobile-active');
					menuIcon.style.display = 'none';
					closeIcon.style.display = 'block';
					document.body.style.overflow = 'hidden';
				}
			});

			// Desktop dropdown management
			const menuItems = document.querySelectorAll('.menu-item-has-children');

			menuItems.forEach(item => {
				const link = item.querySelector('a');
				const chevron = document.createElement('svg');
				chevron.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>';
				chevron.className = 'chevron-icon';
				chevron.style.display = 'inline-block';
				chevron.style.marginLeft = '4px';
				chevron.style.transition = 'transform 0.3s';
				link.appendChild(chevron.firstChild);

				// Hover effect for chevron rotation
				item.addEventListener('mouseenter', function() {
					const svg = this.querySelector('svg.chevron-icon, a > svg');
					if (svg) svg.style.transform = 'rotate(180deg)';
				});

				item.addEventListener('mouseleave', function() {
					const svg = this.querySelector('svg.chevron-icon, a > svg');
					if (svg) svg.style.transform = 'rotate(0deg)';
				});
			});

			// Mobile submenu toggle
			if (window.innerWidth < 1024) {
				menuItems.forEach(item => {
					const link = item.querySelector('> a');
					link.addEventListener('click', function(e) {
						if (mainNav.classList.contains('toggled')) {
							e.preventDefault();
							const submenu = item.querySelector('.sub-menu');
							if (submenu) {
								submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
							}
						}
					});
				});
			}

			// Initialize
			window.addEventListener('scroll', handleScroll);
			handleScroll();

			// Close mobile menu on resize to desktop
			window.addEventListener('resize', function() {
				if (window.innerWidth >= 1024 && mainNav.classList.contains('toggled')) {
					mainNav.classList.remove('toggled');
					header.classList.remove('mobile-active');
					menuIcon.style.display = 'block';
					closeIcon.style.display = 'none';
					document.body.style.overflow = '';
				}
			});
		})();
	</script>

	<?php wp_footer(); ?>
</body>

</html>