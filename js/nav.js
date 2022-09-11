const navbarInJs = document.getElementById('navber-js')
const navDiv = document.createElement('div')
navDiv.innerHTML = `<!-- <nav> -->
            <div class="navbar bg-base-100">
                <!-- Mobile Responsive -->
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            
                            <li><a href="index.html">Home</a></li>
            
                            <li>
                                <a class="justify-between">
                                    Note
                                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24">
                                        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                                    </svg>
                                </a>
                                <ul class="p-2 menu bg-sky-300 w-56">
                                    <li><a class="hover:bg-sky-400 hover:text-white" href="loop.html">Loop</a></li>
                                    <li><a class="hover:bg-sky-400 hover:text-white" href="function.html">Function</a></li>
                                    <li><a class="hover:bg-sky-400 hover:text-white" href="milestone/milestone7.html">Milestone
                                            7</a></li>
                                </ul>
                            </li>
            
                            <li><a href="interviewQuestion.html">Interview Question</a></li>
            
                            <li tabindex="0">
                                <a class="justify-between">
                                    Milestone
                                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24">
                                        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                                    </svg>
                                </a>
                                <ul class="p-2 menu bg-sky-300 w-56">
                                    <li><a class="hover:bg-sky-400 hover:text-white" href="milestone5.html">Milestone
                                            5</a></li>
                                    <li><a class="hover:bg-sky-400 hover:text-white" href="milestone6.html">Milestone
                                            6</a></li>
                                    <li><a class="hover:bg-sky-400 hover:text-white" href="milestone7.html">Milestone
                                            7</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a href="mostafizur.html" class="btn btn-ghost normal-case text-xl">Mostafizur Rahman</a>
                </div>
                <!-- Desktop Responsive -->
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        <li><a href="index.html">Home</a></li>
                        <li tabindex="0">
                            <a>
                                Note
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    viewBox="0 0 24 24">
                                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                </svg>
                            </a>
                            <ul class="p-2 menu bg-sky-300 w-56">
                                <li><a class="hover:bg-sky-400 hover:text-white" href="loop.html">Loop</a></li>
                                <li><a class="hover:bg-sky-400 hover:text-white" href="function.html">Function</a></li>
                                <li><a class="hover:bg-sky-400 hover:text-white" href="milestone7.html">Milestone 7</a>
                                </li>
                            </ul>
                        </li>
                        <li><a href="interviewQuestion.html">Interview Question</a></li>
                        <li tabindex="0">
                            <a>
                                Milestone
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    viewBox="0 0 24 24">
                                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                </svg>
                            </a>
                            <ul class="p-2 menu bg-sky-300 w-56">
                                <li><a class="hover:bg-sky-400 hover:text-white" href="milestone5.html">Milestone 5</a>
                                </li>
                                <li><a class="hover:bg-sky-400 hover:text-white" href="milestone6.html">Milestone 6</a>
                                </li>
                                <li><a class="hover:bg-sky-400 hover:text-white" href="milestone7.html">Milestone 7</a>
                                </li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div class="navbar-end">
                    <a class="btn">Get started</a>
                </div>
            </div>

`;
navbarInJs.appendChild(navDiv)