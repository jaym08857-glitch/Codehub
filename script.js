// =========================
// CODEHUB JAVASCRIPT
// PART 1
// =========================

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalMessage = document.getElementById("modalMessage");


// =========================
// MODAL OPEN
// =========================

function openModal(title, message) {
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    modal.classList.add("active");
}


// =========================
// LOGIN
// =========================

function showLogin() {
    openModal(
        "Sign in",
        "Sign in functionality will be connected to the secure backend later."
    );
}


// =========================
// SIGN UP
// =========================

function showSignup() {
    openModal(
        "Create your account",
        "Account registration will be connected to the database backend later."
    );
}


// =========================
// CLOSE MODAL
// =========================

function closeModal() {
    modal.classList.remove("active");
}


// =========================
// EXPLORE PROJECTS
// =========================

function exploreProjects() {
    const repositories = document.getElementById("repositories");

    if (repositories) {
        repositories.scrollIntoView({
            behavior: "smooth"
        });
    }
}


// =========================
// VIEW PROFILE
// =========================

function viewProfile(name) {
    openModal(
        name,
        "Developer profile page will be available in the next version."
    );
}
// =========================
// CODEHUB JAVASCRIPT
// PART 2
// =========================


// =========================
// SEARCH REPOSITORIES
// =========================

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("input", function () {

        const searchText = this.value.toLowerCase().trim();

        const repositories = document.querySelectorAll(".repository-card");

        repositories.forEach(function (repo) {

            const repoText = repo.textContent.toLowerCase();

            if (repoText.includes(searchText)) {
                repo.style.display = "";
            } else {
                repo.style.display = "none";
            }

        });

    });

}


// =========================
// CLOSE MODAL BY CLICKING
// OUTSIDE THE BOX
// =========================

if (modal) {

    modal.addEventListener("click", function (event) {

        if (event.target === modal) {
            closeModal();
        }

    });

}


// =========================
// CLOSE MODAL WITH ESC KEY
// =========================

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeModal();
    }

});


// =========================
// NAVIGATION LINKS
// =========================

document.querySelectorAll(".nav a").forEach(function (link) {

    link.addEventListener("click", function (event) {

        const target = this.getAttribute("href");

        if (target && target.startsWith("#")) {

            const section = document.querySelector(target);

            if (section) {
                event.preventDefault();

                section.scrollIntoView({
                    behavior: "smooth"
                });
            }

        }

    });

});


// =========================
// PAGE LOADED
// =========================

document.addEventListener("DOMContentLoaded", function () {

    console.log("CodeHub website loaded successfully.");

});