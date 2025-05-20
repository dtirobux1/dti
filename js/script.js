document.querySelectorAll('.grid-image, .tab3-grid-image, .grid-image-large, .grid-image-pose').forEach((img) => {
    const clickedSrc = img.src.replace('.png', 'clicked.png'); // Assuming the "clicked" version has "clicked" in the filename
    const preloadedImage = new Image();
    preloadedImage.src = clickedSrc; // This preloads the clicked image
});

document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.scrollable-content'); // Target scrollable content
    const tabs = document.querySelectorAll('.tab');
    const sections = document.querySelectorAll('.section');
    const warningMessage = document.getElementById('warning-message');
    const maxSelections = 5; // Maximum allowed selections

    let selectedCount = 0;
    const tabClickCounts = { tab1: 0, tab2: 0, tab3: 0, tab4: 0 }; // Track clicks per tab

    // Scroll to section when a tab is clicked
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            const targetId = tab.getAttribute('data-target');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }

            updateActiveTab(index);
        });
    });

    // Function to activate the correct tab
    function updateActiveTab(activeIndex) {
        tabs.forEach((tab, index) => {
            tab.classList.toggle('active', index === activeIndex);
        });
    }

    // Highlight tabs based on scroll position
    content.addEventListener('scroll', () => {
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            const containerRect = content.getBoundingClientRect(); // Use content's rect for calculations

            // Check if section is in view
            if (
                rect.top >= containerRect.top - 100 &&
                rect.top < containerRect.bottom
            ) {
                updateActiveTab(index);
            }
        });
    });


    // Function to show warning message with a timer to hide it
    function showWarningMessage() {
        warningMessage.style.display = 'block';
        warningMessage.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Hide the warning after 3 seconds
        setTimeout(() => {
            warningMessage.style.display = 'none';
        }, 3000);
    }
});

const popupContainer = document.getElementById("popup-container");

const users = [
    { "img": "avatar/Bacon.png", "usernames": ["openspagetti90", "johncantseeme1", "noodlyarms23", "shyguyhidden99", "crispyloaf42"] },
    { "img": "avatar/blueboy.png", "usernames": ["bouwithdream", "kindesssiner6235", "daydreamz423", "softboyvibes77", "moonlitmaverick"] },
    { "img": "avatar/blueboy2.png", "usernames": ["boxmouth", "radicalhooligan", "mouthlessjoe", "edgyteenzzz", "silentstormboy"] },
    { "img": "avatar/john.png", "usernames": ["madigaskaman00", "petsimforever1", "blockheadmania", "petcollectorXD", "sneakyshadow23"] },
    { "img": "avatar/jerome.png", "usernames": ["tyrommuu7", "tootsiesss", "jumpropejester", "chillaxdude93", "maskedphantom101"] },
    { "img": "avatar/kenneth.png", "usernames": ["kenneth.ver3", "kenneth.reborn", "kenneth.the4th"] },
    { "img": "avatar/boy1.png", "usernames": ["thunderblitz92", "ghostlyrider7", "roguedrifter34", "steelshroud66", "midnightprowler"] },
    { "img": "avatar/boy2.png", "usernames": ["darkwavex9", "chillvibezguy", "mysticshadow11", "brickbreakerz", "skyboundhero"] },
    { "img": "avatar/boy3.png", "usernames": ["lazyranger77", "pixelpunks99", "warpedspectre", "neonknight23", "frostburnx"] },
    { "img": "avatar/genericgirl1.png", "usernames": ["Jessy19525", "crystalmaze135", "glitterdash112", "luna_mystic83", "rosycheeksx"] },
    { "img": "avatar/girl1.png", "usernames": ["starlightbloom", "daisydreamer22", "sunsetwhisper", "fairyspell16", "enchantedpixie"] },
    { "img": "avatar/girl2.png", "usernames": ["sugarplumcharm", "midnightmocha", "mysticblush", "sereneskyglow", "blossombreeze"] },
    { "img": "avatar/girl3.png", "usernames": ["bubblypanda88", "cottoncandysprite", "lilacmoonbeam", "angelicmisty", "twinkletulip"] },
    { "img": "avatar/girl4.png", "usernames": ["dreamydoodle", "vanillabeancloud", "pastelglowxx", "rainbowglitz", "cosmiccupcake"] },
    { "img": "avatar/girl5.png", "usernames": ["whimsypetal", "fluffyfoxfire", "radiantrose", "goldenbutterfly", "honeydewshine"] },
    { "img": "avatar/girl6.png", "usernames": ["sapphirehalo", "peachyblossom", "ivorytwinkle", "balletbreeze", "delicatebloom"] }
];

const items = [
    "Vip Access",
    "Vip Access",
    "Custom Makeup",
    "Vip Access",
    "Vip Access",
    "x2 Money",
    "the Increased Item Limit",
    "$6000 Money",
    "Robux Items",
    "Custom Makeup",
    "Vip Access",
    "Vip Access",
    "Vip Access"
];

let popupIndex = 0;

// Helper: Return a random delay between 4 and 9 seconds (in ms)
function getRandomDelay() {
    return Math.floor(Math.random() * (9000 - 4000 + 1)) + 4000;
}

// Unified function to create a card using the same style as your popup
function createCard(container, user, message) {
    const card = document.createElement("div");
    card.classList.add("popup-card");
    // Ensure the card is visible (override any display: none)
    card.style.display = "block";
    card.style.opacity = "0"; // start transparent

    const content = document.createElement("div");
    content.classList.add("popup-card-content");

    // Create the profile image (styled as a small circle)
    const img = document.createElement("img");
    img.src = user.img;
    img.classList.add("profile-pic"); // Make sure your CSS styles .profile-pic appropriately
    content.appendChild(img);

    // Create the text block
    const textDiv = document.createElement("div");
    const text = document.createElement("p");
    text.classList.add("popup-text");
    text.textContent = message;
    textDiv.appendChild(text);
    content.appendChild(textDiv);

    card.appendChild(content);
    container.appendChild(card);

    // Fade-in
    setTimeout(() => {
        card.style.opacity = "1";
    }, 10);

    // Fade-out after 5 seconds, then remove the card
    setTimeout(() => {
        card.style.opacity = "0";
        setTimeout(() => {
            if (container.contains(card)) {
                container.removeChild(card);
            }
        }, 500); // 500ms for fade-out
    }, 5000);
}

// Circuit 2: Success notifications (only in the popup container now)
function circuit2() {
    const delay = getRandomDelay();
    setTimeout(() => {
        const userObj = users[popupIndex];
        const username = userObj.usernames[Math.floor(Math.random() * userObj.usernames.length)];
        const randomUser = { img: userObj.img, username: username };
        const randomItem = items[Math.floor(Math.random() * items.length)];
        const message = `${username} has claimed ${randomItem}`;

        // Create the same styled card in the popup container only
        createCard(popupContainer, randomUser, message);

        popupIndex = (popupIndex + 1) % users.length;
        circuit2();
    }, delay);
}

// Start circuit 2 (success notifications only)
circuit2();



document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.scrollable-content');
    const tabs = document.querySelectorAll('.tab');
    const sections = document.querySelectorAll('.section');
    const warningMessage = document.getElementById('warning-message');
    const generateButton = document.getElementById('generate-button');
    const popupContainer = document.getElementById('popup-container');
    const usernameInput = document.getElementById('username');
    const continueButton = document.querySelector('.continue-button');
    const buttons = document.querySelectorAll('#step-3-buttons button');
    const step3 = document.getElementById('step-3');
    const step4 = document.getElementById('step-4');
    const step4Text = document.getElementById('step-4-text');
    const step5 = document.getElementById('step-5');
    const loadingBarContainer = document.getElementById('loading-bar-container');
    const loadingBar = document.getElementById('loading-bar');
    const maxSelections = 5;
    let selectedItems = [];
    const tabClickCounts = { tab1: 0, tab2: 0, tab3: 0, tab4: 0 };
    let trackedSelectedItems = [];

    

    document.querySelectorAll('.grid-image, .tab3-grid-image, .grid-image-large, .grid-image-pose').forEach((img) => {
        img.addEventListener('click', () => {
            const currentSrc = img.src;
            const section = img.closest('.section');
            const tabId = section ? section.id : null;

            if (!tabId) return;

            const isClicked = currentSrc.includes('clicked');

            if (isClicked) {
                img.src = currentSrc.replace('clicked', '');
                selectedItems = selectedItems.filter((item) => item !== img.alt);
                tabClickCounts[tabId]--;
                // Remove from trackedSelectedItems when unclicking
                trackedSelectedItems = trackedSelectedItems.filter(item => item !== img.alt);
            } else if (selectedItems.length < maxSelections) {
                const clickedSrc = currentSrc.replace('.png', 'clicked.png');
                img.src = clickedSrc;
                selectedItems.push(img.alt);
                tabClickCounts[tabId]++;
                // Add to trackedSelectedItems when clicking
                trackedSelectedItems.push(img.alt);
            } else {
                // Show warning if too many items are selected
                showWarningMessage("You can only select up to 5 items!");
            }

            updateTabImage(tabId);
        });
    });
    function updateTabImage(tabId) {
        const tabIndex = Object.keys(tabClickCounts).indexOf(tabId); // Find the index of the tab
        if (tabIndex !== -1) {
            const tabImage = tabs[tabIndex].querySelector('img');
            const count = tabClickCounts[tabId];
            if (count > 0) {
                tabImage.src = `icons/flap${tabIndex + 1}_${count}.png`; // Example: flap1_3.png
            } else {
                tabImage.src = `icons/flap${tabIndex + 1}.png`; // Default image: flap1.png
            }
        }
    }


    // Generate button functionality
    generateButton.addEventListener('click', () => {
        const username = usernameInput.value.trim();
        if (!username || username.length <= 2 || username.length > 25) {
            const message =
                username.length <= 2
                    ? "Please enter a valid username!"
                    : "Please enter a valid username!";
            showWarningMessage(message);
            return;
        }

        if (selectedItems.length === 0) {
            showWarningMessage("You must select at least 1 item!");
            return;
        }

        // Proceed to sequence
        startSequence(username, selectedItems);
    });

    // Show warning message
    function showWarningMessage(message) {
        warningMessage.textContent = message;
        warningMessage.style.display = 'block';
        warningMessage.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Hide after 3 seconds
        setTimeout(() => {
            warningMessage.style.display = 'none';
        }, 3000);
    }

    function startSequence(username) {
        // Bounce out the main content
        const mainContainer = document.querySelector('.main-container');
        if (mainContainer) {
            mainContainer.classList.add('bounce-out');
            setTimeout(() => {
                mainContainer.style.display = 'none'; // Hide it after animation
            }, 600); // Matches the bounce-out duration
        }

        // Delay showing the sequence container
        setTimeout(() => {
            const sequenceContainer = document.getElementById('sequence-container');

            // Make the sequence container visible with a bounce-in effect
            sequenceContainer.classList.remove('hidden');
            sequenceContainer.classList.add('bounce-in');

            // Remove the bounce-in class after animation
            setTimeout(() => {
                sequenceContainer.classList.remove('bounce-in');
            }, 800); // Matches bounce-in animation duration

            // Step 1: Searching for the user
            const step1 = document.getElementById('step-1');
            const usernamePlaceholder = document.getElementById('username-placeholder');
            const usernamePlaceholder8 = document.getElementById('username-placeholder-8');
            if (usernamePlaceholder) usernamePlaceholder.textContent = username;
            if (usernamePlaceholder8) usernamePlaceholder8.textContent = username;

            step1.classList.remove('hidden');
            step1.classList.add('bounce-in');

            setTimeout(() => {
                // Step 1: Bounce out
                step1.style.animation = 'none'; // Reset animation
                void step1.offsetWidth; // Force reflow
                step1.style.animation = 'bounceOut 0.6s ease forwards';

                // Hide Step 1 after animation
                setTimeout(() => {
                    step1.classList.add('hidden');

                    // Step 2: User Found
                    const step2 = document.getElementById('step-2');
                    const usernameDisplay = document.getElementById('username-display');
                    if (usernameDisplay) usernameDisplay.textContent = username;

                    step2.style.animation = 'none'; // Reset previous animations
                    void step2.offsetWidth; // Force reflow

                    step2.classList.remove('hidden');
                    step2.style.animation = 'bounceIn2 0.8s ease forwards';

                    // Remove the bounce-in class after animation
                    setTimeout(() => {
                        step2.classList.remove('bounce-in');
                        step2.style.animation = 'pulse 1s infinite';

                        // Wait before moving to Step 3
                        setTimeout(() => {
                            step2.style.animation = 'none'; // Reset pulse animation
                            void step2.offsetWidth; // Force reflow
                            step2.style.animation = 'bounceOut 0.6s ease forwards';

                            setTimeout(() => {
                                step2.classList.add('hidden');

                                const step3 = document.getElementById('step-3');
                                step3.classList.remove('hidden'); // Show the step-3 container

                                const text = document.querySelector('#step-3 h3');
                                const buttons = document.querySelectorAll('#step-3-buttons button');

                                // Make all buttons hidden initially
                                buttons.forEach(button => button.classList.add('hidden'));

                                // Animate the text
                                text.classList.remove('hidden'); // Remove hidden class
                                text.classList.add('bounce-in2');
                                setTimeout(() => {
                                    text.classList.remove('bounce-in2'); // Remove bounce-in2 after animation
                                }, 800); // Matches bounce-in2 animation duration

                                // Animate each button sequentially
                                buttons.forEach((button, index) => {
                                    setTimeout(() => {
                                        button.classList.remove('hidden'); // Make the button visible
                                        button.classList.add('bounce-in2'); // Apply the animation
                                        setTimeout(() => {
                                            button.classList.remove('bounce-in2'); // Remove the animation class
                                        }, 800); // Matches bounce-in2 animation duration
                                    }, 200 + index * 200); // Delay each button after the previous one
                                });

                                setTimeout(() => {
                                    const continueButton = document.querySelector('.continue-button');
                                    continueButton.classList.remove('hidden'); // Make the continue button visible
                                    continueButton.classList.add('bounce-in2'); // Animate it to "pop-in"
                                    setTimeout(() => {
                                        continueButton.classList.remove('bounce-in2'); // Remove the bounce animation class
                                    }, 800); // Duration of the bounce-in2 animation
                                }, 200 + buttons.length * 200); // Show it after all other buttons

                            }, 600); // Matches Step 2 bounce-out duration
                        }, 700); // Delay for Step 2 before bounce-out
                    }, 800); // Matches bounce-in animation duration for Step 2
                }, 600); // Matches Step 1 bounce-out duration
            }, 3000); // Delay for Step 1 before bounce-out
        }, 1000); // Delay before showing the sequence container
    }

    // Add event listeners for button clicks
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            button.classList.toggle('selected'); // Toggle 'selected' class
        });
    });


    let progress = 0; // Initialize progress

    function updateLoadingBar(targetProgress, duration) {
        const increment = (targetProgress - progress) / (duration / 100); // Increase per interval
        let lastTime = performance.now();
    
        function step(timestamp) {
            const deltaTime = timestamp - lastTime;
            lastTime = timestamp;
    
            progress += increment * (deltaTime / 100); // Adjust based on time elapsed
            loadingBar.style.width = `${Math.min(progress, targetProgress)}%`;
    
            if (progress < targetProgress) {
                requestAnimationFrame(step); // Continue the animation
            } else {
                progress = targetProgress;
            }
        }
    
        requestAnimationFrame(step);
    }


    // Continue button logic to go to the next step
    continueButton.addEventListener('click', () => {
        console.log("Continue button clicked! Moving to Step 4.");

        // Add bounce-out animation to Step 3
        step3.classList.add('bounce-out');

        // Wait for animation to complete before hiding Step 3 & showing Step 4
        setTimeout(() => {
            step3.classList.add('hidden'); // Hide Step 3 after bounce-out
            step3.classList.remove('bounce-out'); // Remove animation class so it can be reused later

            // Show Step 4 with bounce-in animation
            step4.classList.remove('hidden');
            step4.classList.add('bounce-in2');

            loadingBarContainer.classList.remove('hidden');
            loadingBarContainer.classList.add('bounce-in2');

            let totalItems = trackedSelectedItems.length;
            if (totalItems === 0) return; // Prevent errors if no items are selected

            let itemTime = 2000; // Base time per item (1 second per item)
            let duration = 14000 + (itemTime * totalItems); // Scale duration dynamically

            updateLoadingBar(80, duration);

            // Step 4 - Display loading messages in random intervals over 3-5 seconds
            const messages = [
                "Connecting to server...",
                "Sending handshake request...",
                "Authenticating...",
                "Syncing data...",
                "Verifying connection...",
                "Optimizing network...",
                "Finalizing setup..."
            ];

            const loadingText = document.getElementById("step-4-text"); // Ensure this element exists in your HTML

            function generateRandomDurations(minTotal, maxTotal, count, minStep) {
                let totalDuration = Math.random() * (maxTotal - minTotal) + minTotal;
                let times = Array.from({ length: count }, () => Math.random()); // Generate random values

                let sum = times.reduce((a, b) => a + b, 0);
                let scaledTimes = times.map(t => Math.max((t / sum) * totalDuration, minStep)); // Scale to fit range

                // Adjust last value to ensure total duration is exact
                let adjustedLast = totalDuration - scaledTimes.slice(0, -1).reduce((a, b) => a + b, 0);
                scaledTimes[count - 1] = Math.max(adjustedLast, minStep);

                return scaledTimes;
            }

            const durations = generateRandomDurations(3000, 5000, messages.length, 300); // 3-5 seconds total, at least 300ms per message

            let elapsedTime = 0;

            // Ensure "Connecting to server..." lasts at least 1 second
            setTimeout(() => {
                loadingText.textContent = messages[0];
            }, elapsedTime);
            elapsedTime += Math.max(1000, durations[0]); // Ensure first message lasts at least 1 second

            messages.slice(1).forEach((msg, index) => {
                setTimeout(() => {
                    loadingText.textContent = msg;
                }, elapsedTime);
                elapsedTime += durations[index + 1];
            });

            // Transition to Step 5 after all messages (finalizing setup is last)
            setTimeout(() => {
                loadingText.textContent = "Finalizing setup..."; // Ensuring this is visible for a little longer
                setTimeout(() => {
                    step4.style.animation = 'none'; // Reset pulse animation
                    void step4.offsetWidth; // Force reflow
                    step4.style.animation = 'bounceOut 0.6s ease forwards';

                    setTimeout(() => {
                        step4.classList.add('hidden');
                        step5.classList.remove('hidden');
                        step5.classList.add('bounce-in2');

                        setTimeout(() => {
                            step5.classList.remove('bounce-in2');
                            step5.style.animation = 'pulse 1s infinite';

                            setTimeout(() => {
                                step5.style.animation = 'none';
                                void step5.offsetWidth;
                                step5.style.animation = 'bounceOut 0.6s ease forwards';
                                setTimeout(() => {
                                    step5.classList.add('hidden');
                                    updateStep6Text();  // Call Step 6 here
                                }, 600);
                            }, 700);
                        }, 800);
                    }, 600);
                }, 800); // Ensure "Finalizing setup..." stays for 300ms
            }, elapsedTime); // Wait for all messages to complete

            // Remove bounce-in animation after it's done (prevents repeating issues)
            setTimeout(() => {
                step4.classList.remove('bounce-in2');
                step4.style.animation = 'pulse 1s infinite';
            }, 800); // Adjust this to match your CSS animation duration
        }, 500); // Matches bounce-out animation duration
    });


    function updateStep6Text() {
        const step6Text = document.getElementById('step-6-text');
        const step6 = document.getElementById('step-6');
        const step7Text = document.getElementById('step-7-text');
        const step7 = document.getElementById('step-7');
        const step8 = document.getElementById('step-8');
        const step9 = document.getElementById('step-9');
        const step10 = document.getElementById('step-10');
        const verifyButton = document.querySelector('.verify-button');
        let elapsedTime = 0;

        step6.classList.remove('hidden');
        step6.classList.add('bounce-in2');

        trackedSelectedItems.forEach((item) => {  // Removed the unused 'index' variable

            setTimeout(() => {
                step6Text.textContent = `Generating ${item}.`; // Update text dynamically
            }, elapsedTime);

            // Increment time for each item
            elapsedTime += 2000; // Display each item for 1 second
        });



        setTimeout(() => {

            step6.classList.remove('bounce-in2');
            step6.style.animation = 'pulse 1s infinite';

            // After all items are generated, show completion message

            setTimeout(() => {
                // Animate and transition to Step 7 after completion
                step6.style.animation = 'none';
                void step6.offsetWidth; // Force reflow
                step6.style.animation = 'bounceOut 0.6s ease forwards';

                setTimeout(() => {
                    step6.classList.add('hidden');
                    step7.classList.remove('hidden');
                    step7.classList.add('bounce-in2');

                    setTimeout(() => {
                        step7.classList.remove('bounce-in2');
                        step7.style.animation = 'pulse 1s infinite';

                        setTimeout(() => {
                            // Animate and transition to Step 7 after completion
                            step7.style.animation = 'none';
                            void step7.offsetWidth; // Force reflow
                            step7.style.animation = 'bounceOut 0.6s ease forwards';

                            setTimeout(() => {
                                step7.classList.add('hidden');
                                step8.classList.remove('hidden');
                                step8.classList.add('bounce-in2');

                                setTimeout(() => {

                                    step8.classList.remove('bounce-in2');
                                    step8.style.animation = 'pulse 1s infinite';

                                    setTimeout(() => {
                                        // Animate and transition to Step 7 after completion
                                        step8.style.animation = 'none';
                                        void step8.offsetWidth; // Force reflow
                                        step8.style.animation = 'bounceOut 0.6s ease forwards';

                                        setTimeout(() => {
                                            step8.classList.add('hidden');
                                            step9.classList.remove('hidden');
                                            step9.classList.add('bounce-in2');

                                            setTimeout(() => {
                                                step9.classList.remove('bounce-in2');
                                                step9.style.animation = 'pulse 1s infinite';

                                                setTimeout(() => {
                                                    // Animate and transition to Step 7 after completion
                                                    step9.style.animation = 'none';
                                                    void step9.offsetWidth; // Force reflow
                                                    step9.style.animation = 'bounceOut 0.6s ease forwards';

                                                    setTimeout(() => {
                                                        step9.classList.add('hidden');
                                                        step10.classList.remove('hidden');
                                                        step10.classList.add('bounce-in2');

                                                        setTimeout(() => {

                                                            step10.classList.remove('bounce-in2');

                                                            setTimeout(() => {

                                                                verifyButton.classList.remove('hidden');
                                                                step10.classList.remove('step10before');
                                                                step10.classList.add('step10after');
                                                                verifyButton.classList.add('bounce-in2');

                                                                setTimeout(() => {

                                                                    verifyButton.classList.remove('bounce-in2');
                                                                    verifyButton.style.animation = 'pulse 1s infinite';
        
                                                                }, 200);
                                                            }, 200);
                                                        }, 800);
                                                    }, 200);
                                                }, 700);
                                            }, 800);
                                        }, 600);
                                    }, 3800);

                                }, 800);
                            }, 600);
                        }, 700);
                    }, 800);
                }, 600);
            }, elapsedTime);
        }, 800);
    }
})

document.addEventListener("DOMContentLoaded", function() {
    function sendGAEvent(eventName, eventParams = {}) {
      if (window.gtag) {
          gtag('event', eventName, eventParams);
          console.log("GA4 Event Sent:", eventName, eventParams); // Debugging
      } else {
          console.warn("GA4 not loaded");
      }
  }

  // Observer Function to detect when an element loses "hidden" class
  function trackVisibilityChanges(elementId, eventName) {
    let targetNode = document.getElementById(elementId);
    if (!targetNode) return;

    let observer = new MutationObserver((mutations) => {
        for (let mutation of mutations) {
            if (mutation.attributeName === "class") {
                let isHidden = targetNode.classList.contains("hidden");
                if (!isHidden) { 
                    sendGAEvent(eventName, { step: elementId });

                    // ✅ Stop observing after the first trigger
                    observer.disconnect();
                    break; // Exit loop early since we no longer need to track changes
                }
            }
        }
    });

    observer.observe(targetNode, { attributes: true, attributeFilter: ["class"] });
}


  // Track when Step 9 & Step 10 become visible
  trackVisibilityChanges("step-9", "step_9_reached");
  trackVisibilityChanges("step-10", "step_10_reached");

  // Track button click
  document.addEventListener("click", function (event) {
      if (event.target.matches(".verify-button")) {
          sendGAEvent("verification_button_clicked", { button: "verify-button" });
      }
  });
});


