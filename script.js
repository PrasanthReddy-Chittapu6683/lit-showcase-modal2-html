// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeInteractions();
});

function initializeAnimations() {
    // Navigation animation
    gsap.fromTo('#navigation', 
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.2, ease: 'power3.out' }
    );

    // Hero section animations
    const heroTl = gsap.timeline({ delay: 0.5 });
    
    heroTl.fromTo('#hero-title',
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
    )
    .fromTo('#hero-subtitle',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
        '-=0.8'
    )
    .fromTo('#hero-cta',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.6'
    );

    // Floating elements animation
    gsap.fromTo('.floating-element',
        { 
            y: gsap.utils.random(-50, 50),
            x: gsap.utils.random(-50, 50),
            opacity: 0,
            scale: 0.8
        },
        { 
            y: 0,
            x: 0,
            opacity: 0.6,
            scale: 1,
            duration: 2,
            ease: 'power2.out',
            stagger: 0.2
        }
    );

    // Features section animations
    gsap.fromTo('#features-title',
        { y: 50, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '#features-title',
                start: 'top 80%',
            }
        }
    );

    gsap.fromTo('.feature-card',
        { 
            y: 80,
            opacity: 0,
            scale: 0.9
        },
        {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.features-grid',
                start: 'top 70%',
            }
        }
    );

    // Compatibility section animations
    gsap.fromTo('#compatibility-title',
        { y: 50, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '#compatibility-title',
                start: 'top 80%',
            }
        }
    );

    gsap.fromTo('.framework-card',
        { 
            y: 60,
            opacity: 0,
            rotationY: 45
        },
        {
            y: 0,
            opacity: 1,
            rotationY: 0,
            duration: 1,
            ease: 'power3.out',
            stagger: 0.15,
            scrollTrigger: {
                trigger: '.frameworks-grid',
                start: 'top 70%',
            }
        }
    );

    // Benefits section animations
    gsap.fromTo('#benefits-title',
        { y: 50, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '#benefits-title',
                start: 'top 80%',
            }
        }
    );

    gsap.fromTo('.benefit-card',
        { 
            y: 100,
            opacity: 0,
            scale: 0.8
        },
        {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'back.out(1.7)',
            stagger: 0.15,
            scrollTrigger: {
                trigger: '.benefits-grid',
                start: 'top 70%',
            }
        }
    );

    // Showcase section animations
    gsap.fromTo('#showcase-title',
        { y: 50, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '#showcase-title',
                start: 'top 80%',
            }
        }
    );

    gsap.fromTo('.code-container',
        { y: 80, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.code-container',
                start: 'top 70%',
            }
        }
    );

    // Add hover animations for benefit cards
    document.querySelectorAll('.benefit-card').forEach(card => {
        const icon = card.querySelector('.benefit-icon svg');
        const stats = card.querySelector('.benefit-stats');
        
        card.addEventListener('mouseenter', () => {
            gsap.to(icon, { scale: 1.1, duration: 0.3, ease: 'power2.out' });
            gsap.to(stats, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(icon, { scale: 1, duration: 0.3, ease: 'power2.out' });
            gsap.to(stats, { scale: 1, duration: 0.3, ease: 'power2.out' });
        });
    });
}

function initializeInteractions() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                mobileMenu.classList.add('hidden');
            }
        });
    });

    // Code showcase tabs
    const codeExamples = {
        lit: `import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-button')
export class MyButton extends LitElement {
  @property({ type: String }) variant = 'primary';
  @property({ type: Boolean }) disabled = false;

  static styles = css\`
    :host {
      display: inline-block;
    }
    .btn {
      @apply px-6 py-3 rounded-lg font-semibold 
             transition-all duration-200;
    }
    .btn-primary {
      @apply bg-blue-500 text-white 
             hover:bg-blue-600;
    }
    .btn:disabled {
      @apply opacity-50 cursor-not-allowed;
    }
  \`;

  render() {
    return html\`
      <button 
        class="btn btn-\${this.variant}"
        ?disabled=\${this.disabled}
        @click=\${this._handleClick}
      >
        <slot></slot>
      </button>
    \`;
  }

  private _handleClick() {
    this.dispatchEvent(new CustomEvent('button-click'));
  }
}`,
        react: `// Use in React
import React from 'react';
import './my-button'; // Import the web component

function App() {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <my-button 
        variant="primary"
        onButton-click={handleButtonClick}
      >
        Click me!
      </my-button>
    </div>
  );
}`,
        angular: `<!-- Use in Angular -->
<template>
  <my-button 
    variant="primary"
    (button-click)="onButtonClick()"
  >
    Click me!
  </my-button>
</template>

<script>
import { Component } from '@angular/core';
import './my-button'; // Import the web component

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  onButtonClick() {
    console.log('Button clicked!');
  }
}
</script>`,
        vanilla: `<!-- Use in Vanilla HTML -->
<!DOCTYPE html>
<html>
<head>
  <script type="module" src="./my-button.js"></script>
</head>
<body>
  <my-button variant="primary" id="myBtn">
    Click me!
  </my-button>

  <script>
    document.getElementById('myBtn')
      .addEventListener('button-click', () => {
        console.log('Button clicked!');
      });
  </script>
</body>
</html>`
    };

    const codeTabs = document.querySelectorAll('.code-tab');
    const codeContent = document.getElementById('code-content');
    
    codeTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            codeTabs.forEach(t => {
                t.classList.remove('active', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600', 'text-white');
                t.classList.add('bg-slate-800', 'text-slate-300', 'hover:bg-slate-700');
            });
            
            // Add active class to clicked tab
            tab.classList.add('active', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600', 'text-white');
            tab.classList.remove('bg-slate-800', 'text-slate-300', 'hover:bg-slate-700');
            
            // Update code content
            const tabType = tab.getAttribute('data-tab');
            codeContent.innerHTML = `<code>${codeExamples[tabType]}</code>`;
        });
    });

    // Copy code functionality
    const copyBtn = document.getElementById('copy-btn');
    copyBtn.addEventListener('click', async () => {
        const code = codeContent.textContent;
        try {
            await navigator.clipboard.writeText(code);
            
            // Update button to show success
            copyBtn.innerHTML = `
                <svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-sm text-slate-300">Copied!</span>
            `;
            
            // Reset button after 2 seconds
            setTimeout(() => {
                copyBtn.innerHTML = `
                    <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                    </svg>
                    <span class="text-sm text-slate-300">Copy</span>
                `;
            }, 2000);
        } catch (err) {
            console.error('Failed to copy code:', err);
        }
    });

    // Add parallax effect to hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.gradient-bg');
        const speed = scrolled * 0.5;
        
        if (parallax) {
            parallax.style.transform = `translateY(${speed}px)`;
        }
    });

    // Add intersection observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Add some utility functions for enhanced interactions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Smooth scroll polyfill for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/iamdustan/smoothscroll@master/src/smoothscroll.js';
    document.head.appendChild(script);
}