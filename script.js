/* =========================================================
   EDUCARE — TEACHER'S DAY EXPERIENCE
   ULTRA ENHANCED / FIXED JAVASCRIPT
   Version: 3.0
   ========================================================= */

"use strict";


/* =========================================================
   01. TEACHER DATABASE
   ========================================================= */

const TEACHERS = [

    {
        id: "aman",
        number: "01",
        icon: "◆",

        name: "Aman Sir",

        role: "A TEACHER WHO TURNS QUESTIONS INTO DISCOVERIES",

        tagline:
            "The best lessons are the ones that make us curious enough to keep asking why.",

        greeting:
            "Dear Aman Sir,",

        message: `
            Thank you for every lesson, every explanation and every
            question that made us think a little deeper.

            Aapne humein sirf answers yaad karna nahi sikhaya —
            aapne humein yeh samjhaya ki answer ke peeche ka
            "why" samajhna bhi zaroori hai.

            You have taught us that learning is not simply about
            remembering an answer.

            It is about understanding why that answer exists.

            Your guidance has encouraged us to question, explore
            and look at problems from different perspectives.

            Kabhi koi topic difficult hota tha aur lagta tha
            "yeh samajh nahi aayega"...

            Then you explained it again, in a different way,
            and suddenly everything started making sense.

            Those moments may seem small,
            but they become the memories students remember for years.

            Thank you for your patience, your knowledge and for
            constantly pushing us to think beyond the obvious.

            Aapke lessons sirf classroom tak limited nahi hain.
            They teach us how to think even outside the classroom.

            We are genuinely grateful to have you as a part of
            our journey.
        `,

        lessons: [
            {
                icon: "◇",
                title: "Curiosity",
                text: "You remind us that asking questions is the beginning of learning."
            },
            {
                icon: "◆",
                title: "Thinking",
                text: "You teach us to understand instead of simply memorising."
            },
            {
                icon: "∞",
                title: "Persistence",
                text: "You remind us to keep trying when something feels difficult."
            }
        ],

        appreciation: [
            {
                icon: "◆",
                title: "Knowledge",
                text: "For sharing your knowledge with patience and clarity."
            },
            {
                icon: "★",
                title: "Motivation",
                text: "For encouraging us even when the answer wasn't easy."
            },
            {
                icon: "∞",
                title: "Perspective",
                text: "For teaching us to look beyond the obvious."
            }
        ],

        quotes: [
            "Every question is the beginning of a new discovery.",
            "Thank you for making difficult things feel possible.",
            "A teacher's greatest gift is teaching students how to think.",
            "Your explanations became our understanding.",
            "Curiosity grows when a teacher gives it room to breathe.",
            "Kabhi-kabhi ek teacher ka 'try again' student ko give up karne se rok deta hai."
        ],

        secret:
            "One day we may stop asking questions in your classroom, but the curiosity you created will stay with us."
    },


    {
        id: "sonali",
        number: "02",
        icon: "✦",

        name: "Sonali Ma'am",

        role: "A TEACHER WHO MAKES LEARNING BEAUTIFUL",

        tagline:
            "Some teachers teach lessons. Some teachers become part of the memories behind them.",

        greeting:
            "Dear Sonali Ma'am,",

        message: `
            Thank you for every explanation, every correction,
            every little encouragement and every moment of patience
            you have given us.

            Aap sirf humein padhate nahi hain — aap humein yeh
            believe karna sikhate hain ki hum khud se zyada
            capable hain jitna hum kabhi-kabhi sochte hain.

            You have made learning feel less like a task and more
            like a journey worth remembering.

            Jab koi topic difficult lagta tha, aapki ek simple
            explanation suddenly everything clearer bana deti thi.

            Your guidance has helped us understand that making
            mistakes is not failure — it is simply another step
            towards becoming better.

            The confidence you have given us is something we will
            carry far beyond the classroom.

            Shayad kuch saalon baad humein chapters yaad na rahein,
            questions ya answers bhi yaad na rahein...

            But we will remember the teacher who made those moments
            meaningful.

            Thank you for believing in us, supporting us and
            becoming such a beautiful part of our journey.

            Aap bahut achhe hain, Ma'am.
            And honestly, we are lucky to have you.
        `,

        lessons: [
            {
                icon: "✦",
                title: "Confidence",
                text: "You remind us that we are capable of more than we think."
            },
            {
                icon: "◇",
                title: "Patience",
                text: "You taught us that understanding takes time, and that is okay."
            },
            {
                icon: "∞",
                title: "Growth",
                text: "You encourage us to keep improving, one step at a time."
            }
        ],

        appreciation: [
            {
                icon: "✦",
                title: "Guidance",
                text: "For always showing us a better way forward."
            },
            {
                icon: "★",
                title: "Kindness",
                text: "For making the classroom feel a little warmer."
            },
            {
                icon: "∞",
                title: "Inspiration",
                text: "For motivating us to become better versions of ourselves."
            }
        ],

        quotes: [
            "A good teacher explains. A great teacher inspires.",
            "The lessons that stay with us are rarely written on a blackboard.",
            "Thank you for believing in students before they learned to believe in themselves.",
            "Your patience became our confidence.",
            "Some memories begin with a classroom and stay forever.",
            "Aapki ek chhoti si encouragement kabhi-kabhi poora din better bana deti hai."
        ],

        secret:
            "Behind every confident student is often a teacher who quietly believed in them first."
    },


    {
        id: "joseph",
        number: "03",
        icon: "◆",

        name: "Joseph Sir",

        role: "A TEACHER WHO INSPIRES US TO KEEP GOING",

        tagline:
            "The lessons we remember most are the ones that become a part of us.",

        greeting:
            "Dear Joseph Sir,",

        message: `
            Thank you for every lesson, every explanation and every
            piece of guidance you have given us.

            Aapne humein yeh sikhaya ki difficult moments ka matlab
            yeh nahi hota ki humein ruk jaana chahiye.

            Your words have taught us to keep learning,
            keep improving and never be afraid of making mistakes.

            A great teacher does not simply give answers.
            A great teacher teaches students how to find those
            answers themselves.

            Thank you for your patience, encouragement and for always
            helping us move one step forward.

            Kabhi result expected jaisa nahi aata,
            kabhi answer galat ho jaata hai,
            kabhi confidence low ho jaata hai...

            But the lesson is always:
            try again.

            The knowledge and confidence you have given us will stay
            with us long after the classroom becomes a memory.

            There will be many teachers, many classrooms and many
            chapters in our future.

            But the teachers who helped shape the person we become
            will always have a special place in our story.

            Thank you for being an important part of our journey.

            Aap bahut achhe hain, Sir.
            And we will always be thankful for your guidance.
        `,

        lessons: [
            {
                icon: "◆",
                title: "Guidance",
                text: "For always helping us find the right path and move forward."
            },
            {
                icon: "★",
                title: "Encouragement",
                text: "For reminding us to believe in ourselves and keep trying."
            },
            {
                icon: "∞",
                title: "Lessons",
                text: "For giving us lessons that remain valuable beyond the classroom."
            }
        ],

        appreciation: [
            {
                icon: "◆",
                title: "Guidance",
                text: "For always helping us find the right direction."
            },
            {
                icon: "★",
                title: "Encouragement",
                text: "For reminding us that giving up is never the answer."
            },
            {
                icon: "∞",
                title: "Wisdom",
                text: "For sharing lessons that go beyond textbooks."
            }
        ],

        quotes: [
            "Keep going. Sometimes the next step is the one that changes everything.",
            "A teacher's guidance can become a student's inner voice.",
            "Thank you for teaching us not just what to learn, but how to keep learning.",
            "Every difficult journey becomes easier when someone believes you can finish it.",
            "The classroom ends. The lessons don't.",
            "Aapka 'keep trying' shayad ek simple line ho, but it can mean everything to a student."
        ],

        secret:
            "Someday we may forget the exact words, but we will remember how your guidance made us feel capable of moving forward."
    },


    {
        id: "barsha",
        number: "04",
        icon: "✧",

        name: "Barsha Ma'am",

        role: "A TEACHER WHO BRINGS WARMTH INTO LEARNING",

        tagline:
            "The classroom becomes memorable when knowledge is accompanied by kindness.",

        greeting:
            "Dear Barsha Ma'am,",

        message: `
            Thank you for making learning feel a little more human.

            Beyond books, chapters and examinations, you have shown
            us the importance of patience, kindness and understanding.

            Aapne humein yeh feel karaya ki student hona sirf marks
            aur results ke baare mein nahi hota.

            Sometimes, a little encouragement at the right moment
            can make someone believe in themselves again.

            Thank you for every smile, every explanation and every
            moment when you chose to guide us instead of simply
            correcting us.

            Aapki kindness shayad aapko normal lagti ho,
            but for a student, sometimes it means much more
            than you can imagine.

            The kindness of a teacher can become one of the quietest
            but strongest memories of school life.

            We hope you know that your efforts are noticed,
            appreciated and remembered.

            Aap bahut achhe hain, Ma'am.
            Thank you for making our journey a little brighter.

            Thank you for being a beautiful part of our journey.
        `,

        lessons: [
            {
                icon: "♡",
                title: "Kindness",
                text: "You taught us that understanding people matters as much as understanding books."
            },
            {
                icon: "✧",
                title: "Empathy",
                text: "You remind us that everyone learns and grows differently."
            },
            {
                icon: "∞",
                title: "Courage",
                text: "You encourage us to continue even when confidence feels low."
            }
        ],

        appreciation: [
            {
                icon: "✧",
                title: "Warmth",
                text: "For bringing kindness into everyday learning."
            },
            {
                icon: "♡",
                title: "Understanding",
                text: "For seeing the person behind the student."
            },
            {
                icon: "★",
                title: "Support",
                text: "For making us feel that we can always try again."
            }
        ],

        quotes: [
            "Kindness is a lesson students remember long after the chapter ends.",
            "Thank you for making the classroom feel like a place where we could grow.",
            "Sometimes the most powerful lesson is simply knowing someone believes in you.",
            "Your kindness became a memory we will carry forward.",
            "Teachers give knowledge. The best ones also give courage.",
            "Aapki ek smile bhi kabhi-kabhi classroom ka mood change kar deti hai."
        ],

        secret:
            "There are countless little moments you may have forgotten, but some of those moments became unforgettable for us."
    }

];


/* =========================================================
   02. APPLICATION CONFIG
   ========================================================= */

const CONFIG = {

    storageKey:
        "educare_teachers_day_2026",

    typingSpeed:
        22,

    particleDensity:
        0.000075,

    maxParticles:
        130,

    confettiAmount:
        150,

    teacherTransitionDuration:
        700,

    reducedMotion:
        window.matchMedia &&
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches

};


/* =========================================================
   03. GLOBAL STATE
   ========================================================= */

const AppState = {

    currentScreen:
        "introScreen",

    currentTeacherIndex:
        0,

    selectedTeacher:
        null,

    secretRevealed:
        false,

    isTyping:
        false,

    typewriterToken:
        0,

    introCompleted:
        false,

    fireworksActive:
        false,

    soundEnabled:
        false,

    interactionCount:
        0,

    initialized:
        false,

    teacherTransitioning:
        false

};


/* =========================================================
   04. DOM HELPERS
   ========================================================= */

const $ = selector =>
    document.querySelector(selector);


const $$ = selector =>
    document.querySelectorAll(selector);


function getElement(id) {

    return document.getElementById(id);

}


function firstExisting(...ids) {

    for (const id of ids) {

        const element =
            getElement(id);

        if (element) return element;

    }

    return null;

}


/* =========================================================
   05. DOM REFERENCES
   ========================================================= */

const DOM = {

    loadingScreen:
        getElement("loadingScreen"),

    loadingProgress:
        getElement("loadingProgress"),

    introScreen:
        getElement("introScreen"),

    messageScreen:
        getElement("messageScreen"),

    teacherScreen:
        getElement("teacherScreen"),

    teacherDetailScreen:
        getElement("teacherDetailScreen"),

    finalScreen:
        getElement("finalScreen"),

    enterButton:
        getElement("enterButton"),

    continueButton:
        getElement("continueButton"),

    backButton:
        getElement("backButton"),

    restartButton:
        getElement("restartButton"),

    surpriseButton:
        getElement("surpriseButton"),

    teacherGrid:
        getElement("teacherGrid"),

    appreciationGrid:
        getElement("appreciationGrid"),

    lessonGrid:
        getElement("lessonGrid"),

    teacherNumber:
        getElement("teacherNumber"),

    teacherIcon:
        getElement("teacherIcon"),

    teacherName:
        getElement("teacherName"),

    teacherRole:
        getElement("teacherRole"),

    teacherTagline:
        getElement("teacherTagline"),

    teacherGreeting:
        getElement("teacherGreeting"),

    teacherMessage:
        getElement("teacherMessage"),

    finalTeacherName:
        getElement("finalTeacherName"),

    toast:
        getElement("toast"),

    confettiContainer:
        getElement("confettiContainer"),

    fireworksContainer:
        getElement("fireworksContainer"),

    floatingElements:
        getElement("floatingElements"),

    progressFill:
        getElement("progressFill"),

    progressCurrent:
        getElement("progressCurrent"),

    progressTotal:
        getElement("progressTotal"),

    detailCurrentNumber:
        getElement("detailCurrentNumber"),

    randomQuote:
        getElement("randomQuote"),

    quoteButton:
        getElement("quoteButton"),

    secretButton:
        getElement("secretButton"),

    secretMessage:
        getElement("secretMessage"),

    modal:
        getElement("celebrationModal"),

    modalClose:
        firstExisting(
            "modalClose",
            "closeModalButton"
        ),

    musicButton:
        getElement("musicButton"),

    musicIcon:
        getElement("musicIcon"),

    ambientAudio:
        getElement("ambientAudio")

};


/* =========================================================
   06. SAFE TEXT
   ========================================================= */

function setText(element, value) {

    if (!element) return;

    element.textContent =
        value ?? "";

}


/* =========================================================
   07. LOADING EXPERIENCE
   ========================================================= */

function startLoadingExperience() {

    if (!DOM.loadingScreen) {

        initializeApp();

        return;

    }


    if (CONFIG.reducedMotion) {

        if (DOM.loadingProgress) {

            DOM.loadingProgress.style.width =
                "100%";

        }

        DOM.loadingScreen.classList.add(
            "loaded"
        );

        initializeApp();

        return;

    }


    let progress = 0;

    const interval =
        setInterval(() => {

            progress +=
                Math.random() * 16 + 7;


            if (progress >= 100) {

                progress = 100;

                clearInterval(interval);


                if (DOM.loadingProgress) {

                    DOM.loadingProgress.style.width =
                        "100%";

                }


                setTimeout(() => {

                    DOM.loadingScreen.classList.add(
                        "loaded"
                    );

                    initializeApp();

                }, 400);

            }


            if (DOM.loadingProgress) {

                DOM.loadingProgress.style.width =
                    `${progress}%`;

            }

        }, 120);

}


/* =========================================================
   08. DETAIL SCREEN SCROLL RESET
   ========================================================= */

/*
   IMPORTANT:
   #teacherDetailScreen is itself the scroll container.
   window.scrollTo() was incorrect for this layout.
*/

function resetDetailScroll() {

    const detail =
        DOM.teacherDetailScreen;


    if (!detail) return;


    detail.scrollTop = 0;
    detail.scrollLeft = 0;


    /*
       Some browsers can preserve scroll position
       for a frame after changing .active.
    */

    requestAnimationFrame(() => {

        detail.scrollTop = 0;
        detail.scrollLeft = 0;

    });


    setTimeout(() => {

        detail.scrollTop = 0;
        detail.scrollLeft = 0;

    }, 50);

}


/* =========================================================
   09. TEACHER TOP ENTRANCE
   ========================================================= */

function prepareTeacherTopEntrance() {

    const detail =
        DOM.teacherDetailScreen;


    if (!detail) return;


    /*
       Remove old transition state.
    */

    detail.classList.remove(
        "teacher-changing",
        "teacher-enter-top"
    );


    /*
       Force browser to register removal.
    */

    void detail.offsetWidth;


    /*
       Add the NEW top-entry class.
    */

    detail.classList.add(
        "teacher-changing",
        "teacher-enter-top"
    );


    /*
       Remove only after animation completes.
    */

    clearTimeout(
        prepareTeacherTopEntrance.timer
    );


    prepareTeacherTopEntrance.timer =
        setTimeout(() => {

            detail.classList.remove(
                "teacher-changing",
                "teacher-enter-top"
            );

            AppState.teacherTransitioning =
                false;

        }, CONFIG.teacherTransitionDuration + 50);

}


/* =========================================================
   10. SCREEN MANAGEMENT
   ========================================================= */

function showScreen(screenId) {

    const screens =
        $$(".screen");


    screens.forEach(screen => {

        screen.classList.remove(
            "active"
        );

        screen.setAttribute(
            "aria-hidden",
            "true"
        );

    });


    const target =
        getElement(screenId);


    if (!target) return;


    target.classList.add(
        "active"
    );

    target.setAttribute(
        "aria-hidden",
        "false"
    );


    AppState.currentScreen =
        screenId;


    updateProgress(
        screenId
    );


    /*
       IMPORTANT:
       Do NOT use window.scrollTo() here.
       Every .screen has its own scroll behaviour.
    */

    if (
        screenId ===
        "teacherDetailScreen"
    ) {

        resetDetailScroll();

    }
    else {

        /*
           Reset target screen itself.
        */

        target.scrollTop = 0;
        target.scrollLeft = 0;

    }


    if (
        screenId ===
        "finalScreen"
    ) {

        setTimeout(() => {

            launchGrandCelebration();

        }, CONFIG.reducedMotion
            ? 0
            : 500);

    }

}


/* =========================================================
   11. PROGRESS SYSTEM
   ========================================================= */

function updateProgress(screenId) {

    const progressMap = {

        introScreen: 10,

        messageScreen: 25,

        teacherScreen: 45,

        teacherDetailScreen: 75,

        finalScreen: 100

    };


    const progress =
        progressMap[screenId] ?? 10;


    if (DOM.progressFill) {

        DOM.progressFill.style.width =
            `${progress}%`;

    }


    const numbers = {

        introScreen: "01",

        messageScreen: "02",

        teacherScreen: "03",

        teacherDetailScreen: "04",

        finalScreen: "05"

    };


    if (DOM.progressCurrent) {

        DOM.progressCurrent.textContent =
            numbers[screenId] ?? "01";

    }


    if (DOM.progressTotal) {

        DOM.progressTotal.textContent =
            "05";

    }

}


/* =========================================================
   12. TEACHER GRID
   ========================================================= */

function createTeacherCards() {

    if (!DOM.teacherGrid) return;


    DOM.teacherGrid.innerHTML =
        "";


    const fragment =
        document.createDocumentFragment();


    TEACHERS.forEach(
        (teacher, index) => {

            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "teacher-card reveal-item";


            card.dataset.teacher =
                teacher.id;


            card.dataset.index =
                index;


            card.setAttribute(
                "tabindex",
                "0"
            );


            card.setAttribute(
                "role",
                "button"
            );


            card.setAttribute(
                "aria-label",
                `Open letter for ${teacher.name}`
            );


            card.innerHTML = `

                <span class="teacher-card-number">
                    ${teacher.number}
                </span>

                <div class="teacher-card-icon"
                     aria-hidden="true">
                    ${teacher.icon}
                </div>

                <h3 class="teacher-card-name">
                    ${teacher.name}
                </h3>

                <p class="teacher-card-role">
                    ${teacher.role}
                </p>

                <div class="teacher-card-open">
                    READ LETTER
                    <span aria-hidden="true">→</span>
                </div>

            `;


            card.addEventListener(
                "click",
                () => openTeacher(index)
            );


            card.addEventListener(
                "keydown",
                event => {

                    if (
                        event.key === "Enter" ||
                        event.key === " "
                    ) {

                        event.preventDefault();

                        openTeacher(index);

                    }

                }
            );


            card.addEventListener(
                "mouseenter",
                () => {

                    if (
                        !CONFIG.reducedMotion
                    ) {

                        createFloatingHeart(
                            card,
                            teacher.icon
                        );

                    }

                }
            );


            fragment.appendChild(
                card
            );

        }
    );


    DOM.teacherGrid.appendChild(
        fragment
    );

}


/* =========================================================
   13. OPEN TEACHER
   ========================================================= */

function openTeacher(index) {

    if (
        index < 0 ||
        index >= TEACHERS.length
    ) {

        return;

    }


    const previousIndex =
        AppState.currentTeacherIndex;


    const isChangingTeacher =
        AppState.selectedTeacher !== null &&
        previousIndex !== index;


    const teacher =
        TEACHERS[index];


    /*
       Cancel any previous typewriter immediately.
    */

    AppState.typewriterToken++;


    AppState.isTyping =
        false;


    AppState.currentTeacherIndex =
        index;


    AppState.selectedTeacher =
        teacher;


    AppState.secretRevealed =
        false;


    AppState.teacherTransitioning =
        true;


    /*
       Populate BEFORE animation.
       Therefore the new teacher is already present
       when the top-entry animation begins.
    */

    populateTeacher(
        teacher
    );


    /*
       Activate detail screen.
    */

    showScreen(
        "teacherDetailScreen"
    );


    /*
       HARD RESET:
       The detail page must ALWAYS start at the top.
    */

    resetDetailScroll();


    /*
       Then trigger top entrance.
    */

    if (
        isChangingTeacher ||
        AppState.currentScreen ===
        "teacherDetailScreen"
    ) {

        requestAnimationFrame(() => {

            resetDetailScroll();

            prepareTeacherTopEntrance();

        });

    }


    saveProgress();


    createBurst(
        window.innerWidth / 2,
        Math.min(
            window.innerHeight * 0.35,
            420
        ),
        CONFIG.reducedMotion
            ? 5
            : 18
    );

}


/* =========================================================
   14. POPULATE TEACHER
   ========================================================= */

function populateTeacher(
    teacher
) {

    if (!teacher) return;


    setText(
        DOM.teacherNumber,
        teacher.number
    );


    setText(
        DOM.teacherIcon,
        teacher.icon
    );


    setText(
        DOM.teacherName,
        teacher.name
    );


    setText(
        DOM.teacherRole,
        teacher.role
    );


    if (DOM.teacherTagline) {

        typeText(
            DOM.teacherTagline,
            teacher.tagline,
            CONFIG.typingSpeed
        );

    }


    setText(
        DOM.teacherGreeting,
        teacher.greeting
    );


    renderTeacherMessage(
        teacher.message
    );


    renderLessons(
        teacher.lessons
    );


    renderAppreciation(
        teacher.appreciation
    );


    resetSecret();


    setText(
        DOM.detailCurrentNumber,
        teacher.number
    );


    updateQuote(
        teacher
    );


    updateNavigationState();

}


/* =========================================================
   15. TYPEWRITER
   ========================================================= */

function typeText(
    element,
    text,
    speed = 25
) {

    if (!element) return;


    AppState.typewriterToken++;


    const token =
        AppState.typewriterToken;


    if (CONFIG.reducedMotion) {

        element.textContent =
            text;

        element.classList.remove(
            "typewriter-cursor"
        );

        AppState.isTyping =
            false;

        return;

    }


    AppState.isTyping =
        true;


    element.classList.add(
        "typewriter-cursor"
    );


    element.textContent =
        "";


    let index = 0;


    function writeNext() {

        if (
            token !==
            AppState.typewriterToken
        ) {

            return;

        }


        if (index >= text.length) {

            AppState.isTyping =
                false;


            setTimeout(() => {

                if (
                    token ===
                    AppState.typewriterToken
                ) {

                    element.classList.remove(
                        "typewriter-cursor"
                    );

                }

            }, 800);


            return;

        }


        element.textContent +=
            text.charAt(index);


        index++;


        setTimeout(
            writeNext,
            speed
        );

    }


    writeNext();

}


/* =========================================================
   16. MESSAGE RENDERING
   ========================================================= */

function renderTeacherMessage(
    message
) {

    if (!DOM.teacherMessage)
        return;


    DOM.teacherMessage.innerHTML =
        "";


    const paragraphs =
        String(message)
            .trim()
            .split(/\n\s*\n/);


    const fragment =
        document.createDocumentFragment();


    paragraphs.forEach(text => {

        const paragraph =
            document.createElement(
                "p"
            );


        paragraph.textContent =
            text.trim();


        fragment.appendChild(
            paragraph
        );

    });


    DOM.teacherMessage.appendChild(
        fragment
    );

}


/* =========================================================
   17. LESSON CARDS
   ========================================================= */

function renderLessons(
    items = []
) {

    if (!DOM.lessonGrid)
        return;


    DOM.lessonGrid.innerHTML =
        "";


    const fragment =
        document.createDocumentFragment();


    items.forEach(
        (item, index) => {

            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "lesson-card";


            if (
                !CONFIG.reducedMotion
            ) {

                card.style.animationDelay =
                    `${index * 0.1}s`;

            }


            const icon =
                document.createElement(
                    "div"
                );


            icon.className =
                "lesson-card-icon";


            icon.textContent =
                item.icon || "✦";


            const title =
                document.createElement(
                    "h3"
                );


            title.className =
                "lesson-card-title";


            title.textContent =
                item.title;


            const text =
                document.createElement(
                    "p"
                );


            text.className =
                "lesson-card-text";


            text.textContent =
                item.text;


            card.append(
                icon,
                title,
                text
            );


            fragment.appendChild(
                card
            );

        }
    );


    DOM.lessonGrid.appendChild(
        fragment
    );

}


/* =========================================================
   18. APPRECIATION CARDS
   ========================================================= */

function renderAppreciation(
    items = []
) {

    if (!DOM.appreciationGrid)
        return;


    DOM.appreciationGrid.innerHTML =
        "";


    const fragment =
        document.createDocumentFragment();


    items.forEach(
        (item, index) => {

            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "appreciation-card";


            if (
                !CONFIG.reducedMotion
            ) {

                card.style.animationDelay =
                    `${index * 0.1}s`;

            }


            const icon =
                document.createElement(
                    "div"
                );


            icon.className =
                "appreciation-icon";


            icon.textContent =
                item.icon || "✦";


            const title =
                document.createElement(
                    "h3"
                );


            title.className =
                "appreciation-title";


            title.textContent =
                item.title;


            const text =
                document.createElement(
                    "p"
                );


            text.className =
                "appreciation-text";


            text.textContent =
                item.text;


            card.append(
                icon,
                title,
                text
            );


            fragment.appendChild(
                card
            );

        }
    );


    DOM.appreciationGrid.appendChild(
        fragment
    );

}


/* =========================================================
   19. TEACHER NAVIGATION
   ========================================================= */

function nextTeacher() {

    if (!TEACHERS.length)
        return;


    let next =
        AppState.currentTeacherIndex + 1;


    if (
        next >= TEACHERS.length
    ) {

        next = 0;

    }


    openTeacher(
        next
    );


    createBurst(
        window.innerWidth / 2,
        window.innerHeight / 2,
        CONFIG.reducedMotion
            ? 5
            : 16
    );

}


function previousTeacher() {

    if (!TEACHERS.length)
        return;


    let previous =
        AppState.currentTeacherIndex - 1;


    if (
        previous < 0
    ) {

        previous =
            TEACHERS.length - 1;

    }


    openTeacher(
        previous
    );


    createBurst(
        window.innerWidth / 2,
        window.innerHeight / 2,
        CONFIG.reducedMotion
            ? 5
            : 14
    );

}


function updateNavigationState() {

    const teacher =
        AppState.selectedTeacher;


    if (!teacher) return;


    const previousIndex =
        AppState.currentTeacherIndex - 1 < 0
            ? TEACHERS.length - 1
            : AppState.currentTeacherIndex - 1;


    const nextIndex =
        AppState.currentTeacherIndex + 1 >=
        TEACHERS.length
            ? 0
            : AppState.currentTeacherIndex + 1;


    const previousName =
        $(
            "[data-nav='previous-name']"
        );


    const nextName =
        $(
            "[data-nav='next-name']"
        );


    if (previousName) {

        previousName.textContent =
            TEACHERS[previousIndex].name;

    }


    if (nextName) {

        nextName.textContent =
            TEACHERS[nextIndex].name;

    }


    const previousButton =
        $(
            "[data-action='previous']"
        );


    const nextButton =
        $(
            "[data-action='next']"
        );


    if (previousButton) {

        previousButton.setAttribute(
            "aria-label",
            `Previous: ${TEACHERS[previousIndex].name}`
        );

    }


    if (nextButton) {

        nextButton.setAttribute(
            "aria-label",
            `Next: ${TEACHERS[nextIndex].name}`
        );

    }

}


/* =========================================================
   20. RANDOM QUOTES
   ========================================================= */

function updateQuote(
    teacher
) {

    if (!DOM.randomQuote)
        return;


    const quotes =
        teacher.quotes || [];


    if (!quotes.length) {

        DOM.randomQuote.textContent =
            "Thank you for being an important part of our journey.";

        return;

    }


    const quote =
        quotes[
            Math.floor(
                Math.random() *
                quotes.length
            )
        ];


    DOM.randomQuote.textContent =
        `"${quote}"`;

}


function showRandomQuote() {

    const teacher =
        AppState.selectedTeacher;


    if (!teacher) return;


    if (
        DOM.randomQuote &&
        !CONFIG.reducedMotion
    ) {

        DOM.randomQuote.classList.add(
            "changing"
        );


        setTimeout(() => {

            updateQuote(
                teacher
            );


            DOM.randomQuote.classList.remove(
                "changing"
            );

        }, 220);

    }
    else {

        updateQuote(
            teacher
        );

    }


    createBurst(
        window.innerWidth / 2,
        window.innerHeight / 2,
        CONFIG.reducedMotion
            ? 4
            : 18
    );


    showToast(
        "✦ A new thought for you"
    );

}


/* =========================================================
   21. SECRET MESSAGE
   ========================================================= */

function revealSecret() {

    const teacher =
        AppState.selectedTeacher;


    if (!teacher) return;


    if (
        AppState.secretRevealed
    ) {

        resetSecret();

        return;

    }


    AppState.secretRevealed =
        true;


    if (DOM.secretMessage) {

        DOM.secretMessage.innerHTML =
            "";


        const quote =
            document.createElement(
                "p"
            );


        quote.textContent =
            `“${teacher.secret}”`;


        const signature =
            document.createElement(
                "strong"
            );


        signature.textContent =
            "— From your students";


        DOM.secretMessage.append(
            quote,
            signature
        );


        DOM.secretMessage.classList.add(
            "revealed"
        );

    }


    if (DOM.secretButton) {

        DOM.secretButton.innerHTML =
            `<span>✦</span> HIDE THE SECRET`;

    }


    createBurst(
        window.innerWidth / 2,
        window.innerHeight / 2,
        CONFIG.reducedMotion
            ? 6
            : 35
    );


    if (
        !CONFIG.reducedMotion
    ) {

        createFirework(
            window.innerWidth / 2,
            window.innerHeight / 2
        );

    }


    showToast(
        "✦ Secret message unlocked"
    );

}


function resetSecret() {

    AppState.secretRevealed =
        false;


    if (DOM.secretMessage) {

        DOM.secretMessage.classList.remove(
            "revealed"
        );


        DOM.secretMessage.innerHTML =
            "";

    }


    if (DOM.secretButton) {

        DOM.secretButton.innerHTML =
            `<span>✦</span> REVEAL SECRET`;

    }

}


/* =========================================================
   22. TEACHER ENTRANCE
   ========================================================= */

function animateTeacherEntrance() {

    const detail =
        DOM.teacherDetailScreen;


    if (!detail)
        return;


    /*
       This function now ALWAYS forces a top entrance.
       It does NOT restore the old CSS bottom animation.
    */

    if (
        CONFIG.reducedMotion
    ) {

        detail.classList.remove(
            "teacher-changing",
            "teacher-enter-top"
        );

        return;

    }


    prepareTeacherTopEntrance();

}


/* =========================================================
   23. CONFETTI ENGINE
   ========================================================= */

function createConfetti(
    amount = CONFIG.confettiAmount
) {

    if (
        !DOM.confettiContainer ||
        CONFIG.reducedMotion
    ) return;


    const symbols = [
        "✦",
        "✧",
        "★",
        "◆",
        "•"
    ];


    const safeAmount =
        Math.min(
            amount,
            220
        );


    for (
        let i = 0;
        i < safeAmount;
        i++
    ) {

        const piece =
            document.createElement(
                "span"
            );


        piece.className =
            "confetti";


        const left =
            Math.random() * 100;


        const delay =
            Math.random() * 1.2;


        const duration =
            2.5 +
            Math.random() * 3;


        const drift =
            (
                Math.random() * 400 -
                200
            ) + "px";


        const rotation =
            (
                Math.random() * 1400 -
                700
            ) + "deg";


        piece.style.left =
            `${left}%`;


        piece.style.animationDelay =
            `${delay}s`;


        piece.style.animationDuration =
            `${duration}s`;


        piece.style.setProperty(
            "--drift",
            drift
        );


        piece.style.setProperty(
            "--rotation",
            rotation
        );


        piece.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        DOM.confettiContainer.appendChild(
            piece
        );


        setTimeout(() => {

            piece.remove();

        }, (duration + delay) * 1000 + 500);

    }

}


/* =========================================================
   24. FIREWORK ENGINE
   ========================================================= */

function createFirework(
    centerX,
    centerY
) {

    if (
        !DOM.fireworksContainer ||
        CONFIG.reducedMotion
    ) return;


    const particleCount =
        45;


    for (
        let i = 0;
        i < particleCount;
        i++
    ) {

        const particle =
            document.createElement(
                "span"
            );


        particle.className =
            "firework-particle";


        const angle =
            (
                Math.PI * 2 * i
            ) /
            particleCount;


        const distance =
            50 +
            Math.random() * 140;


        const x =
            Math.cos(angle) *
            distance;


        const y =
            Math.sin(angle) *
            distance;


        particle.style.left =
            `${centerX}px`;


        particle.style.top =
            `${centerY}px`;


        particle.style.setProperty(
            "--x",
            `${x}px`
        );


        particle.style.setProperty(
            "--y",
            `${y}px`
        );


        particle.style.animationDelay =
            `${Math.random() * 0.08}s`;


        DOM.fireworksContainer.appendChild(
            particle
        );


        setTimeout(() => {

            particle.remove();

        }, 1250);

    }

}


/* =========================================================
   25. MULTIPLE FIREWORKS
   ========================================================= */

function launchFireworks(
    count = 5
) {

    if (
        AppState.fireworksActive ||
        CONFIG.reducedMotion
    ) return;


    AppState.fireworksActive =
        true;


    for (
        let i = 0;
        i < count;
        i++
    ) {

        setTimeout(() => {

            createFirework(

                window.innerWidth *
                (
                    0.15 +
                    Math.random() *
                    0.7
                ),

                window.innerHeight *
                (
                    0.15 +
                    Math.random() *
                    0.5
                )

            );

        }, i * 450);

    }


    setTimeout(() => {

        AppState.fireworksActive =
            false;

    }, count * 450 + 1500);

}


/* =========================================================
   26. GRAND CELEBRATION
   ========================================================= */

function launchGrandCelebration() {

    createConfetti(
        CONFIG.reducedMotion
            ? 0
            : 190
    );


    launchFireworks(
        7
    );


    if (
        !CONFIG.reducedMotion
    ) {

        setTimeout(() => {

            createFirework(
                window.innerWidth * 0.5,
                window.innerHeight * 0.35
            );

        }, 900);

    }

}


/* =========================================================
   27. PARTICLE BURST
   ========================================================= */

function createBurst(
    x,
    y,
    amount = 20
) {

    if (
        !DOM.floatingElements
    ) return;


    const safeAmount =
        Math.min(
            amount,
            45
        );


    const symbols = [
        "✦",
        "✧",
        "•",
        "★"
    ];


    for (
        let i = 0;
        i < safeAmount;
        i++
    ) {

        const particle =
            document.createElement(
                "span"
            );


        particle.className =
            "floating-heart";


        particle.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        particle.style.left =
            `${x}px`;


        particle.style.top =
            `${y}px`;


        particle.style.fontSize =
            `${8 + Math.random() * 10}px`;


        particle.style.animationDuration =
            `${
                CONFIG.reducedMotion
                    ? 0.5
                    : 1 + Math.random()
            }s`;


        DOM.floatingElements.appendChild(
            particle
        );


        setTimeout(() => {

            particle.remove();

        }, 2200);

    }

}


/* =========================================================
   28. FLOATING SYMBOL
   ========================================================= */

function createFloatingHeart(
    element,
    symbol = "✦"
) {

    if (
        !element ||
        !DOM.floatingElements
    ) return;


    const rect =
        element.getBoundingClientRect();


    const heart =
        document.createElement(
            "span"
        );


    heart.className =
        "floating-heart";


    heart.textContent =
        symbol;


    heart.style.left =
        `${rect.left + rect.width / 2}px`;


    heart.style.top =
        `${rect.top + rect.height / 2}px`;


    DOM.floatingElements.appendChild(
        heart
    );


    setTimeout(() => {

        heart.remove();

    }, 2200);

}


/* =========================================================
   29. RIPPLE EFFECT
   ========================================================= */

function createRipple(
    x,
    y
) {

    if (
        CONFIG.reducedMotion
    ) return;


    const ripple =
        document.createElement(
            "span"
        );


    ripple.className =
        "ripple";


    ripple.style.left =
        `${x}px`;


    ripple.style.top =
        `${y}px`;


    document.body.appendChild(
        ripple
    );


    setTimeout(() => {

        ripple.remove();

    }, 800);

}


/* =========================================================
   30. TOAST
   ========================================================= */

let toastTimeout;


function showToast(
    message
) {

    if (!DOM.toast)
        return;


    clearTimeout(
        toastTimeout
    );


    DOM.toast.textContent =
        message;


    DOM.toast.classList.add(
        "show"
    );


    toastTimeout =
        setTimeout(() => {

            DOM.toast.classList.remove(
                "show"
            );

        }, 2600);

}


/* =========================================================
   31. COUNTER ANIMATION
   ========================================================= */

function animateCounter(
    element,
    target,
    duration = 1200
) {

    if (!element)
        return;


    if (
        CONFIG.reducedMotion
    ) {

        element.textContent =
            `${target}+`;

        return;

    }


    const startTime =
        performance.now();


    function update(
        currentTime
    ) {

        const elapsed =
            currentTime -
            startTime;


        const progress =
            Math.min(
                elapsed / duration,
                1
            );


        const eased =
            1 -
            Math.pow(
                1 - progress,
                3
            );


        const value =
            Math.floor(
                eased * target
            );


        element.textContent =
            value >= target
                ? `${target}+`
                : value;


        if (
            progress < 1
        ) {

            requestAnimationFrame(
                update
            );

        }

    }


    requestAnimationFrame(
        update
    );

}


/* =========================================================
   32. DYNAMIC APPRECIATION COUNTERS
   ========================================================= */

function initializeCounters() {

    const counters =
        $$(
            "[data-counter]"
        );


    counters.forEach(
        counter => {

            const target =
                Number(
                    counter.dataset.counter
                ) || 100;


            animateCounter(
                counter,
                target,
                1500
            );

        }
    );

}


/* =========================================================
   33. PARTICLE BACKGROUND
   ========================================================= */

const particleSystem = {

    canvas:
        null,

    ctx:
        null,

    particles:
        [],

    width:
        0,

    height:
        0,

    mouseX:
        null,

    mouseY:
        null,

    density:
        CONFIG.particleDensity,

    animationFrame:
        null

};


/* =========================================================
   34. INITIALIZE PARTICLES
   ========================================================= */

function initializeParticles() {

    particleSystem.canvas =
        getElement(
            "particleCanvas"
        );


    if (
        !particleSystem.canvas
    ) return;


    particleSystem.ctx =
        particleSystem.canvas.getContext(
            "2d"
        );


    if (
        !particleSystem.ctx
    ) return;


    resizeParticleCanvas();


    if (
        !CONFIG.reducedMotion
    ) {

        animateBackgroundParticles();

    }

}


/* =========================================================
   35. RESIZE PARTICLE CANVAS
   ========================================================= */

function resizeParticleCanvas() {

    const canvas =
        particleSystem.canvas;


    if (!canvas)
        return;


    const ratio =
        Math.min(
            window.devicePixelRatio || 1,
            2
        );


    particleSystem.width =
        window.innerWidth;


    particleSystem.height =
        window.innerHeight;


    canvas.width =
        particleSystem.width *
        ratio;


    canvas.height =
        particleSystem.height *
        ratio;


    canvas.style.width =
        `${particleSystem.width}px`;


    canvas.style.height =
        `${particleSystem.height}px`;


    particleSystem.ctx.setTransform(
        ratio,
        0,
        0,
        ratio,
        0,
        0
    );


    createBackgroundParticles();

}


/* =========================================================
   36. CREATE BACKGROUND PARTICLES
   ========================================================= */

function createBackgroundParticles() {

    if (
        !particleSystem.width ||
        !particleSystem.height
    ) return;


    const calculated =
        Math.floor(
            particleSystem.width *
            particleSystem.height *
            particleSystem.density
        );


    const count =
        Math.min(
            CONFIG.maxParticles,
            Math.max(
                30,
                calculated + 35
            )
        );


    particleSystem.particles =
        [];


    for (
        let i = 0;
        i < count;
        i++
    ) {

        particleSystem.particles.push({

            x:
                Math.random() *
                particleSystem.width,

            y:
                Math.random() *
                particleSystem.height,

            radius:
                Math.random() *
                1.5 +
                0.3,

            speedX:
                (
                    Math.random() -
                    0.5
                ) * 0.18,

            speedY:
                (
                    Math.random() -
                    0.5
                ) * 0.18,

            opacity:
                Math.random() *
                0.5 +
                0.1,

            phase:
                Math.random() *
                Math.PI *
                2

        });

    }

}


/* =========================================================
   37. ANIMATE BACKGROUND PARTICLES
   ========================================================= */

function animateBackgroundParticles() {

    const canvas =
        particleSystem.canvas;


    const ctx =
        particleSystem.ctx;


    if (
        !canvas ||
        !ctx
    ) return;


    ctx.clearRect(
        0,
        0,
        particleSystem.width,
        particleSystem.height
    );


    const time =
        performance.now() *
        0.001;


    particleSystem.particles.forEach(
        particle => {

            particle.x +=
                particle.speedX;


            particle.y +=
                particle.speedY;


            if (
                particle.x < -10
            ) {

                particle.x =
                    particleSystem.width + 10;

            }


            if (
                particle.x >
                particleSystem.width + 10
            ) {

                particle.x = -10;

            }


            if (
                particle.y < -10
            ) {

                particle.y =
                    particleSystem.height + 10;

            }


            if (
                particle.y >
                particleSystem.height + 10
            ) {

                particle.y = -10;

            }


            let alpha =
                particle.opacity *
                (
                    0.65 +
                    0.35 *
                    Math.sin(
                        time +
                        particle.phase
                    )
                );


            if (
                particleSystem.mouseX !== null
            ) {

                const dx =
                    particle.x -
                    particleSystem.mouseX;


                const dy =
                    particle.y -
                    particleSystem.mouseY;


                const distance =
                    Math.sqrt(
                        dx * dx +
                        dy * dy
                    );


                if (
                    distance < 120
                ) {

                    alpha +=
                        (
                            1 -
                            distance / 120
                        ) *
                        0.4;

                }

            }


            ctx.beginPath();


            ctx.arc(
                particle.x,
                particle.y,
                particle.radius,
                0,
                Math.PI * 2
            );


            ctx.fillStyle =
                `rgba(230,205,150,${Math.min(alpha, 0.9)})`;


            ctx.fill();

        }
    );


    particleSystem.animationFrame =
        requestAnimationFrame(
            animateBackgroundParticles
        );

}


/* =========================================================
   38. MOUSE TRACKING
   ========================================================= */

function initializeMouseInteraction() {

    const supportsHover =
        window.matchMedia &&
        window.matchMedia(
            "(hover: hover)"
        ).matches;


    if (!supportsHover)
        return;


    document.addEventListener(
        "mousemove",
        event => {

            particleSystem.mouseX =
                event.clientX;


            particleSystem.mouseY =
                event.clientY;


            updateCursorGlow(
                event.clientX,
                event.clientY
            );

        },
        {
            passive: true
        }
    );


    document.addEventListener(
        "mouseleave",
        () => {

            particleSystem.mouseX =
                null;


            particleSystem.mouseY =
                null;

        }
    );

}


/* =========================================================
   39. CURSOR GLOW
   ========================================================= */

function updateCursorGlow(
    x,
    y
) {

    let glow =
        getElement(
            "cursorGlow"
        );


    if (!glow) {

        glow =
            document.createElement(
                "div"
            );


        glow.id =
            "cursorGlow";


        glow.className =
            "cursor-glow";


        document.body.appendChild(
            glow
        );

    }


    glow.style.left =
        `${x}px`;


    glow.style.top =
        `${y}px`;

}


/* =========================================================
   40. CLICK EFFECTS
   ========================================================= */

function initializeClickEffects() {

    document.addEventListener(
        "click",
        event => {

            AppState.interactionCount++;


            createRipple(
                event.clientX,
                event.clientY
            );


            if (
                !CONFIG.reducedMotion &&
                Math.random() > 0.55
            ) {

                createBurst(
                    event.clientX,
                    event.clientY,
                    5
                );

            }

        },
        {
            passive: true
        }
    );

}


/* =========================================================
   41. CARD PARALLAX
   ========================================================= */

function initializeCardParallax() {

    if (
        CONFIG.reducedMotion
    ) return;


    const supportsHover =
        window.matchMedia &&
        window.matchMedia(
            "(hover: hover)"
        ).matches;


    if (!supportsHover)
        return;


    let ticking =
        false;


    document.addEventListener(
        "mousemove",
        event => {

            if (ticking)
                return;


            ticking =
                true;


            requestAnimationFrame(() => {

                const cards =
                    $$(".teacher-card");


                cards.forEach(
                    card => {

                        const rect =
                            card.getBoundingClientRect();


                        if (
                            event.clientX >= rect.left &&
                            event.clientX <= rect.right &&
                            event.clientY >= rect.top &&
                            event.clientY <= rect.bottom
                        ) {

                            const x =
                                (
                                    event.clientX -
                                    rect.left
                                ) /
                                rect.width -
                                0.5;


                            const y =
                                (
                                    event.clientY -
                                    rect.top
                                ) /
                                rect.height -
                                0.5;


                            card.style.transform =
                                `translateY(-10px) rotateX(${y * -4}deg) rotateY(${x * 4}deg)`;

                        }
                        else {

                            card.style.transform =
                                "";

                        }

                    }
                );


                ticking =
                    false;

            });

        },
        {
            passive: true
        }
    );

}


/* =========================================================
   42. KEYBOARD NAVIGATION
   ========================================================= */

function initializeKeyboardControls() {

    document.addEventListener(
        "keydown",
        event => {

            /*
               Don't hijack typing fields.
            */

            const target =
                event.target;


            if (
                target &&
                (
                    target.tagName === "INPUT" ||
                    target.tagName === "TEXTAREA" ||
                    target.tagName === "SELECT"
                )
            ) {

                return;

            }


            const key =
                event.key.toLowerCase();


            if (
                key === "escape"
            ) {

                if (
                    DOM.modal?.classList.contains(
                        "active"
                    )
                ) {

                    closeCelebrationModal();

                    return;

                }


                if (
                    AppState.currentScreen ===
                    "teacherDetailScreen"
                ) {

                    showScreen(
                        "teacherScreen"
                    );

                }


                return;

            }


            if (
                AppState.currentScreen !==
                "teacherDetailScreen"
            ) {

                return;

            }


            if (
                key === "arrowright"
            ) {

                event.preventDefault();

                nextTeacher();

            }


            if (
                key === "arrowleft"
            ) {

                event.preventDefault();

                previousTeacher();

            }

        }
    );

}


/* =========================================================
   43. LOCAL STORAGE
   ========================================================= */

function saveProgress() {

    try {

        const data = {

            teacherIndex:
                AppState.currentTeacherIndex,

            teacherId:
                AppState.selectedTeacher?.id ||
                null,

            timestamp:
                Date.now()

        };


        localStorage.setItem(
            CONFIG.storageKey,
            JSON.stringify(data)
        );

    }
    catch (error) {

        console.warn(
            "Local storage unavailable."
        );

    }

}


function loadProgress() {

    try {

        const raw =
            localStorage.getItem(
                CONFIG.storageKey
            );


        if (!raw)
            return;


        const data =
            JSON.parse(raw);


        if (
            Number.isInteger(
                data.teacherIndex
            ) &&
            data.teacherIndex >= 0 &&
            data.teacherIndex <
            TEACHERS.length
        ) {

            AppState.currentTeacherIndex =
                data.teacherIndex;

        }

    }
    catch (error) {

        console.warn(
            "Could not load saved progress."
        );

    }

}


/* =========================================================
   44. CELEBRATION MODAL
   ========================================================= */

function openCelebrationModal() {

    if (!DOM.modal)
        return;


    DOM.modal.classList.add(
        "active"
    );


    DOM.modal.setAttribute(
        "aria-hidden",
        "false"
    );


    createConfetti(
        CONFIG.reducedMotion
            ? 0
            : 70
    );


    launchFireworks(
        3
    );

}


function closeCelebrationModal() {

    if (!DOM.modal)
        return;


    DOM.modal.classList.remove(
        "active"
    );


    DOM.modal.setAttribute(
        "aria-hidden",
        "true"
    );

}


/* =========================================================
   45. RESTART EXPERIENCE
   ========================================================= */

function restartExperience() {

    AppState.currentTeacherIndex =
        0;


    AppState.selectedTeacher =
        null;


    AppState.secretRevealed =
        false;


    AppState.introCompleted =
        false;


    AppState.typewriterToken++;


    AppState.fireworksActive =
        false;


    AppState.teacherTransitioning =
        false;


    resetSecret();


    closeCelebrationModal();


    if (
        DOM.confettiContainer
    ) {

        DOM.confettiContainer.innerHTML =
            "";

    }


    if (
        DOM.fireworksContainer
    ) {

        DOM.fireworksContainer.innerHTML =
            "";

    }


    if (
        DOM.teacherDetailScreen
    ) {

        DOM.teacherDetailScreen.classList.remove(
            "teacher-changing",
            "teacher-enter-top"
        );

        DOM.teacherDetailScreen.scrollTop =
            0;

    }


    showScreen(
        "introScreen"
    );


    showToast(
        "✦ Experience restarted"
    );


    setTimeout(() => {

        createBurst(
            window.innerWidth / 2,
            window.innerHeight / 2,
            CONFIG.reducedMotion
                ? 5
                : 20
        );

    }, 400);

}


/* =========================================================
   46. BUTTON EVENTS
   ========================================================= */

function initializeButtons() {

    if (
        DOM.enterButton
    ) {

        DOM.enterButton.addEventListener(
            "click",
            () => {

                AppState.introCompleted =
                    true;


                createBurst(
                    window.innerWidth / 2,
                    window.innerHeight / 2,
                    CONFIG.reducedMotion
                        ? 5
                        : 30
                );


                showScreen(
                    "messageScreen"
                );

            }
        );

    }


    if (
        DOM.continueButton
    ) {

        DOM.continueButton.addEventListener(
            "click",
            () => {

                createBurst(
                    window.innerWidth / 2,
                    window.innerHeight / 2,
                    CONFIG.reducedMotion
                        ? 5
                        : 20
                );


                showScreen(
                    "teacherScreen"
                );

            }
        );

    }


    if (
        DOM.backButton
    ) {

        DOM.backButton.addEventListener(
            "click",
            () => {

                showScreen(
                    "teacherScreen"
                );

            }
        );

    }


    if (
        DOM.surpriseButton
    ) {

        DOM.surpriseButton.addEventListener(
            "click",
            () => {

                const teacher =
                    AppState.selectedTeacher;


                if (teacher) {

                    setText(
                        DOM.finalTeacherName,
                        teacher.name
                    );

                }


                createConfetti(
                    CONFIG.reducedMotion
                        ? 0
                        : 150
                );


                launchFireworks(
                    5
                );


                openCelebrationModal();


                setTimeout(() => {

                    showScreen(
                        "finalScreen"
                    );

                }, CONFIG.reducedMotion
                    ? 0
                    : 900);

            }
        );

    }


    if (
        DOM.restartButton
    ) {

        DOM.restartButton.addEventListener(
            "click",
            restartExperience
        );

    }


    if (
        DOM.quoteButton
    ) {

        DOM.quoteButton.addEventListener(
            "click",
            showRandomQuote
        );

    }


    if (
        DOM.secretButton
    ) {

        DOM.secretButton.addEventListener(
            "click",
            revealSecret
        );

    }


    if (
        DOM.modalClose
    ) {

        DOM.modalClose.addEventListener(
            "click",
            closeCelebrationModal
        );

    }


    const modalBackdrop =
        $(".modal-backdrop");


    if (
        modalBackdrop
    ) {

        modalBackdrop.addEventListener(
            "click",
            closeCelebrationModal
        );

    }


    const previousButton =
        $(
            "[data-action='previous']"
        );


    const nextButton =
        $(
            "[data-action='next']"
        );


    const allTeachersButton =
        $(
            "[data-action='all-teachers']"
        );


    if (
        previousButton
    ) {

        previousButton.addEventListener(
            "click",
            previousTeacher
        );

    }


    if (
        nextButton
    ) {

        nextButton.addEventListener(
            "click",
            nextTeacher
        );

    }


    if (
        allTeachersButton
    ) {

        allTeachersButton.addEventListener(
            "click",
            () => {

                showScreen(
                    "teacherScreen"
                );

            }
        );

    }


    initializeMusicButton();

}


/* =========================================================
   47. MUSIC CONTROL
   ========================================================= */

function initializeMusicButton() {

    if (
        !DOM.musicButton ||
        !DOM.ambientAudio
    ) return;


    DOM.musicButton.addEventListener(
        "click",
        async () => {

            try {

                if (
                    DOM.ambientAudio.paused
                ) {

                    await DOM.ambientAudio.play();


                    AppState.soundEnabled =
                        true;


                    if (
                        DOM.musicIcon
                    ) {

                        DOM.musicIcon.textContent =
                            "♫";

                    }


                    DOM.musicButton.setAttribute(
                        "aria-label",
                        "Mute ambient music"
                    );


                    DOM.musicButton.classList.add(
                        "music-active"
                    );


                    showToast(
                        "♫ Ambient music on"
                    );

                }
                else {

                    DOM.ambientAudio.pause();


                    AppState.soundEnabled =
                        false;


                    if (
                        DOM.musicIcon
                    ) {

                        DOM.musicIcon.textContent =
                            "♪";

                    }


                    DOM.musicButton.setAttribute(
                        "aria-label",
                        "Play ambient music"
                    );


                    DOM.musicButton.classList.remove(
                        "music-active"
                    );


                    showToast(
                        "♪ Ambient music off"
                    );

                }

            }
            catch (error) {

                showToast(
                    "♪ Add an audio source to enable music"
                );

            }

        }
    );

}


/* =========================================================
   48. DOUBLE CLICK CELEBRATION
   ========================================================= */

function initializeSecretInteraction() {

    let clicks =
        0;


    let timer =
        null;


    document.addEventListener(
        "dblclick",
        event => {

            clicks++;


            if (
                !CONFIG.reducedMotion
            ) {

                createFirework(
                    event.clientX,
                    event.clientY
                );

            }


            if (
                clicks >= 3
            ) {

                createConfetti(
                    CONFIG.reducedMotion
                        ? 0
                        : 60
                );


                showToast(
                    "✦ You found a little extra magic"
                );


                clicks =
                    0;

            }


            clearTimeout(
                timer
            );


            timer =
                setTimeout(() => {

                    clicks =
                        0;

                }, 1500);

        }
    );

}


/* =========================================================
   49. PAGE VISIBILITY
   ========================================================= */

function initializeVisibilityHandling() {

    document.addEventListener(
        "visibilitychange",
        () => {

            if (
                document.hidden
            ) {

                document.title =
                    "Come back when you're ready ✦";

            }
            else {

                document.title =
                    "Educare | Teacher's Day";

            }

        }
    );

}


/* =========================================================
   50. DYNAMIC YEAR
   ========================================================= */

function setCurrentYear() {

    const yearElements =
        $$(
            "[data-current-year]"
        );


    yearElements.forEach(
        element => {

            element.textContent =
                new Date()
                    .getFullYear();

        }
    );

}


/* =========================================================
   51. ACCESSIBILITY
   ========================================================= */

function initializeAccessibility() {

    const teacherCards =
        $$(".teacher-card");


    teacherCards.forEach(
        (card, index) => {

            card.setAttribute(
                "tabindex",
                "0"
            );


            card.setAttribute(
                "role",
                "button"
            );


            card.addEventListener(
                "keydown",
                event => {

                    if (
                        event.key === "Enter" ||
                        event.key === " "
                    ) {

                        event.preventDefault();


                        openTeacher(
                            index
                        );

                    }

                }
            );

        }
    );


    if (
        DOM.modal
    ) {

        DOM.modal.setAttribute(
            "aria-hidden",
            "true"
        );

    }

}


/* =========================================================
   52. TEXT PROTECTION
   ========================================================= */

function initializeTextProtection() {

    document.addEventListener(
        "dragstart",
        event => {

            if (
                event.target.tagName ===
                "IMG"
            ) {

                event.preventDefault();

            }

        }
    );

}


/* =========================================================
   53. EASTER EGG
   ========================================================= */

function initializeEasterEgg() {

    let sequence =
        "";


    const secretCode =
        "teacher";


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key.length !== 1
            ) return;


            sequence +=
                event.key.toLowerCase();


            if (
                sequence.length >
                secretCode.length
            ) {

                sequence =
                    sequence.slice(
                        -secretCode.length
                    );

            }


            if (
                sequence ===
                secretCode
            ) {

                createConfetti(
                    CONFIG.reducedMotion
                        ? 0
                        : 120
                );


                launchFireworks(
                    5
                );


                showToast(
                    "✦ Teacher mode unlocked!"
                );


                sequence =
                    "";

            }

        }
    );

}


/* =========================================================
   54. MOBILE OPTIMIZATION
   ========================================================= */

function initializeMobileOptimization() {

    const isSmallScreen =
        window.innerWidth <= 768;


    if (
        isSmallScreen &&
        DOM.teacherDetailScreen
    ) {

        DOM.teacherDetailScreen.classList.add(
            "mobile-detail"
        );

    }


    window.addEventListener(
        "resize",
        () => {

            if (
                window.innerWidth <= 768
            ) {

                DOM.teacherDetailScreen?.classList.add(
                    "mobile-detail"
                );

            }
            else {

                DOM.teacherDetailScreen?.classList.remove(
                    "mobile-detail"
                );

            }

        },
        {
            passive: true
        }
    );

}


/* =========================================================
   55. TOUCH FEEDBACK
   ========================================================= */

function initializeTouchFeedback() {

    const buttons =
        $$(
            "button, " +
            ".teacher-card, " +
            ".quote-machine, " +
            ".secret-section"
        );


    buttons.forEach(
        element => {

            element.addEventListener(
                "touchstart",
                () => {

                    element.classList.add(
                        "touch-active"
                    );

                },
                {
                    passive: true
                }
            );


            element.addEventListener(
                "touchend",
                () => {

                    setTimeout(() => {

                        element.classList.remove(
                            "touch-active"
                        );

                    }, 120);

                },
                {
                    passive: true
                }
            );

        }
    );

}


/* =========================================================
   56. PAGE PERFORMANCE
   ========================================================= */

function initializePerformanceHandling() {

    document.addEventListener(
        "visibilitychange",
        () => {

            if (
                document.hidden &&
                particleSystem.animationFrame
            ) {

                cancelAnimationFrame(
                    particleSystem.animationFrame
                );


                particleSystem.animationFrame =
                    null;

            }
            else if (
                !document.hidden &&
                particleSystem.canvas &&
                !CONFIG.reducedMotion &&
                !particleSystem.animationFrame
            ) {

                animateBackgroundParticles();

            }

        }
    );

}


/* =========================================================
   57. INITIALIZE APP
   ========================================================= */

function initializeApp() {

    if (
        AppState.initialized
    ) return;


    AppState.initialized =
        true;


    console.log(
        "%c EDUCARE TEACHER'S DAY EXPERIENCE ",
        "font-size:18px;font-weight:bold;"
    );


    console.log(
        "%c Built with love by students. ✦ ",
        "font-size:12px;"
    );


    loadProgress();


    createTeacherCards();


    initializeParticles();


    initializeMouseInteraction();


    initializeClickEffects();


    initializeCardParallax();


    initializeKeyboardControls();


    initializeButtons();


    initializeSecretInteraction();


    initializeVisibilityHandling();


    initializeAccessibility();


    initializeTextProtection();


    initializeEasterEgg();


    initializeMobileOptimization();


    initializeTouchFeedback();


    initializePerformanceHandling();


    setCurrentYear();


    initializeCounters();


    updateProgress(
        "introScreen"
    );


    showScreen(
        "introScreen"
    );


    setTimeout(() => {

        createBurst(
            window.innerWidth / 2,
            window.innerHeight * 0.45,
            CONFIG.reducedMotion
                ? 4
                : 12
        );

    }, CONFIG.reducedMotion
        ? 0
        : 900);


    window.addEventListener(
        "resize",
        resizeParticleCanvas,
        {
            passive: true
        }
    );

}


/* =========================================================
   58. DOCUMENT READY
   ========================================================= */

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        startLoadingExperience,
        {
            once: true
        }
    );

}
else {

    startLoadingExperience();

}


/* =========================================================
   END OF EDUCARE TEACHER'S DAY EXPERIENCE
   ========================================================= */