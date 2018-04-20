import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';


const mobileMenu = new MobileMenu();
const revealFeatureItem = new RevealOnScroll('feature-item', '80%');
const revealTestimonial = new RevealOnScroll('testimonial', '90%');
const stickyHeader = new StickyHeader();
const modal = new Modal();
