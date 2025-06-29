let sliderInitialized = false;

function initializeSlider() {
	const items = document.querySelectorAll(
		`#${fragmentElement.id} .lfr-layout-structure-item-bootstrap-slideritem`
	);
	let active = 'active';

	items.forEach((item) => {
		const slideContainer = item.parentNode?.parentNode;
		if (slideContainer?.classList) {
			slideContainer.classList.add('carousel-item');
			if (active) {
				slideContainer.classList.add(active);
				active = '';
			}
		}
	});

	// Explicitly initialize the Bootstrap 4.6.2 carousel behavior
	$(`#${fragmentElement.id} .carousel`).carousel({
		interval: 3000,
		ride: 'carousel'
	});
}

function setupObserver() {
	const collectionNode = fragmentElement.querySelector(
		'.carousel-inner .lfr-layout-structure-item-collection'
	);
	if (collectionNode) {
		const observer = new MutationObserver((mutationsList) => {
			for (const mutation of mutationsList) {
				if (mutation.type === 'childList') {
					for (const node of mutation.addedNodes) {
						if (
							node.nodeType === Node.ELEMENT_NODE &&
							node.classList.contains('row') &&
							!sliderInitialized
						) {
							sliderInitialized = true;
							initializeSlider();
							break;
						}
					}
				}
			}
		});
		observer.observe(collectionNode, {
			childList: true,
			subtree: false
		});
	}
}

function init() {
	sliderInitialized = false;

	if (layoutMode === 'view') {
		initializeSlider();
	} else {
		setupObserver();
	}
}

// Initial load
init();

// Re-run after each SennaJS navigation
Liferay.on('endNavigate', () => {
	init();
});