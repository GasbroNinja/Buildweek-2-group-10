/*const BASE_URL = "https://striveschool-api.herokuapp.com/api/deezer/search?q=a"

const fetchMain = async () => {

    try{

        const resp = await fetch(BASE_URL);
        const albumz = await resp.json()
        const row = document.getElementById("album");
        row.innerHTML = ""
        const col = document.createElement("div");
        col.className = "container-fluid mx-0 px-0"
        col.innerHTML = `
        <div class="container-fluid px-0 mb-5 vh-auto">
            <div class="container px-0 overflow-auto" style="height: calc(100vh - 0px)" id="albumCenter">
                <div class="navbar d-none d-md-block w-100">
                    <div class="navbar px-0" id="navbar">
                
                    <div class="row d-grid gap-2 d-flex mt-3 align-items-center justify-content-spacearound mb-4 w-100">
                        <div class="col-md-3 col-lg-2 ps-4 pe-0 d-flex">
                        <button class="btn btn-dark me-2 rounded rounded-5 fw-bold fs-6" style="color: #7f7f7f;" type="button"><i class="bi bi-chevron-left fs-5"></i></button>
                        <button class="btn btn-dark rounded rounded-5 fw-bold fs-6" style="color: #7f7f7f;" type="button"><i class="bi bi-chevron-right fs-5"></i></button>
                        </div>
                        <div class="col-md-8 ms-md-auto ms-auto col-lg-8 col-xxl-9 d-flex justify-content-end px-0 mt-0">
                        <span class="badge rounded-pill text-bg-dark d-flex ps-3 fs-5 position-relative"
                            ><img
                            class="rounded rounded-5 position-absolute top-50 start-25 translate-middle"
                            width="32px"
                            height="auto"
                            src="assets/imgs/avatar.jpeg"
                            alt="avatar"
                            />&nbsp;&nbsp;&nbsp;&nbsp;Lidia Nautilus ...<i class="bi bi-caret-down-fill ps-3"></i></span
                        >
                        </div>
                    </div>
                </div>
            </div>

            <div class="container d-flex align-items-end" style="padding-top: 84px; padding-bottom: 200px; background: rgba(214,184,76,1);">
                <!-- +++++++++++++++++++++++++++++++++album h2, paragrafi e immagini+++++++++++ -->
                <img
                class="m-2 shadow-lg mb-md-5 mb-lg-0"
                src="assets/imgs/search/avatar-giovent-brucata.webp"
                width="190px"
                height="auto"
                alt="avatar"
                />
                <div class="mt-5 p-2">
                <div>
                    <p class="badge mb-0">ALBUM</p>
                    <h2 class="fw-bold text-light mt-0" style="font-size: 5rem">Gioventù brucata</h2>
                </div>
                <div class="d-flex flex align-center">
                    <img
                    class="rounded-circle"
                    src="assets/imgs/search/Pinguini-Tattici-Nucleari group.jpg"
                    alt=""
                    width="30px"
                    height="30px"
                    />
                    <span>
                    <span class="fw-semibold ms-2 text-light">Pinguini Tattici Nucleari</span>
                    <span class="fw-semibold text-light">·</span>
                    <span class="fw-semibold text-light">2017</span>
                    <span class="fw-semibold text-light">·</span>
                    <span class="fw-semibold text-light">12 brani,</span>
                    <span class="fw-semibold text-secondary"> 53 min 20 sec.</span>
                    </span>
                </div>
                </div>
            </div>

            <div
                class="container-fluid mx-0 p-5 mb-5 mt-0 position-"
                style="
                background: linear-gradient(0deg, rgb(52, 52, 52) 0%, rgba(52, 52, 52, 0.893) 100%);
                opacity: 75%;
                "
            >
                <div class="d-flex justify-content-start align-items-center gap-1">
                <!-- +++++++++++++++++button play ++++++++++++++++-->
                <button id="playPlayer btnPlayer" class="bg-success rounded rounded-circle border-0 px-2 fs-2" style="--bs-bg-opacity: .5;">
                    <i id="btnPlayer" class="bi bi-play-fill"></i>
                </button>
                <!--+++++++++++++       ++++++++ ++++++++++++     icone      +++++++++++++++++++++++                  -->
                <div>
                    <a id="btnPlayer" href=""><i class="bi bi-heart ps-3 fs-2"></i></a>
                </div>
                <div>
                    <a id="btnPlayer" href=""><i class="bi bi-arrow-down-circle ps-3 fs-2"></i></a>
                </div>
                <div>
                    <a id="btnPlayer" href=""><i class="bi bi-three-dots ps-3 fs-2"></i></a>
                </div>
                </div>
                <!-- +++++++++++++++++++++++++++++++++++table ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++-->
                <table class="table table-borderless mt-5 container-fluid text-light">
                <thead class="justify-content-between" style="border-bottom: 1px solid white">
                    <tr id="centraNav">
                    <th class="flex"># TITOLO</th>
                    <th class="text-end">RIPRODUZIONI</th>
                    <th class="text-end"><i class="bi bi-clock text-light"></i></th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                    <td>
                        <a class="fs-6 fw-bold text-light text-decoration-none" href="">Montanelli-intro</a>
                        <a href="" class="text-light text-decoration-none"><p>Pinguini Tattici Nucleari</p></a>
                    </td>
                    <td class="text-end">Doe</td>
                    <td class="text-end">john@example.com</td>
                    </tr>
                    <tr>
                    <td>
                        <a class="fs-6 fw-bold text-light text-decoration-none" href="">Montanelli-intro</a>
                        <a href="" class="text-light text-decoration-none"><p>Pinguini Tattici Nucleari</p></a>
                    </td>
                    <td class="text-end">Moe</td>
                    <td class="text-end">mary@example.com</td>
                    </tr>
                    <tr>
                    <td>
                        <a class="fs-6 fw-bold text-light text-decoration-none" href="">Montanelli-intro</a>
                        <a href="" class="text-light text-decoration-none"><p>Pinguini Tattici Nucleari</p></a>
                    </td>
                    <td class="text-end">Dooley</td>
                    <td class="text-end">july@example.com</td>
                    </tr>
                    <tr>
                    <td>
                        <a class="fs-6 fw-bold text-light text-decoration-none" href="">Montanelli-intro</a>
                        <a href="" class="text-light text-decoration-none"><p>Pinguini Tattici Nucleari</p></a>
                    </td>
                    <td class="text-end">Doe</td>
                    <td class="text-end">john@example.com</td>
                    </tr>
                    <tr>
                    <td>
                        <a class="fs-6 fw-bold text-light text-decoration-none" href="">Montanelli-intro</a>
                        <a href="" class="text-light text-decoration-none"><p>Pinguini Tattici Nucleari</p></a>
                    </td>
                    <td class="text-end">Doe</td>
                    <td class="text-end">john@example.com</td>
                    </tr>
                    <tr>
                    <td>
                        <a class="fs-6 fw-bold text-light text-decoration-none" href="">Montanelli-intro</a>
                        <a href="" class="text-light text-decoration-none"><p>Pinguini Tattici Nucleari</p></a>
                    </td>
                    <td class="text-end">Doe</td>
                    <td class="text-end">john@example.com</td>
                    </tr>
                    <tr>
                    <td>
                        <a class="fs-6 fw-bold text-light text-decoration-none" href="">Montanelli-intro</a>
                        <a href="" class="text-light text-decoration-none"><p>Pinguini Tattici Nucleari</p></a>
                    </td>
                    <td class="text-end">Doe</td>
                    <td class="text-end">john@example.com</td>
                    </tr>
                    <tr>
                    <td>
                        <a class="fs-6 fw-bold text-light text-decoration-none" href="">Montanelli-intro</a>
                        <a href="" class="text-light text-decoration-none"><p>Pinguini Tattici Nucleari</p></a>
                    </td>
                    <td class="text-end">Doe</td>
                    <td class="text-end">john@example.com</td>
                    </tr>
                </tbody>
                </table>

                <footer class="pe-3 mb-5" style="height: auto; margin-top: 80vh">
                <div class="container-fluid mx-3">
                    <div class="row row-cols-3 d-flex">
                    <div class="col-2 col-md-3 col-lg-2 d-flex justify-content-start">
                        <div class="text-light">
                        <h5 class="text-light opacity-100 mb-3">Azienda</h5>
                        <a class="text-decoration-none text-light" href="#"><p class="opacity-50">Chi siamo</p></a>
                        <a class="text-decoration-none text-light" href="#"
                            ><p class="opacity-50">Opportunità di lavoro</p></a
                        >
                        <a class="text-decoration-none text-light" href="#"
                            ><p class="opacity-50">For the Record</p></a
                        >
                        </div>
                    </div>
                    <div class="col-2 col-md-3 col-lg-2 d-flex justify-content-start">
                        <div class="text-light">
                        <h5 class="text-light opacity-100 mb-3">Community</h5>
                        <a class="text-decoration-none text-light" href="#"
                            ><p class="opacity-50">Per artisti</p></a
                        >
                        <a class="text-decoration-none text-light" href="#"
                            ><p class="opacity-50">Sviluppatori</p></a
                        >
                        <a class="text-decoration-none text-light" href="#"><p class="opacity-50">Pubblicità</p></a>
                        <a class="text-decoration-none text-light" href="#"
                            ><p class="opacity-50">Investitori</p></a
                        >
                        <a class="text-decoration-none text-light" href="#"><p class="opacity-50">Venditori</p></a>
                        </div>
                    </div>
                    <div class="col-2 col-md-3 col-lg-2 d-flex justify-content-start">
                        <div class="text-light">
                        <h5 class="text-light opacity-100 mb-3">Link Utili</h5>
                        <a class="text-decoration-none text-light" href="#"><p class="opacity-50">Assistenza</p></a>
                        <a class="text-decoration-none text-light" href="#"
                            ><p class="opacity-50">App per cellulare gratuita</p></a
                        >
                        <a class="text-decoration-none text-light" href="#"
                            ><p class="opacity-50">Diritti del consumatore</p></a
                        >
                        </div>
                    </div>
                    <div class="col-2 col-md-1 d-flex justify-content-end align-items-start flex-grow-1">
                        <button
                        class="btn btn-dark me-2 rounded rounded-5 fw-bold fs-6"
                        style="color: #7f7f7f"
                        type="button"
                        >
                        <a class="text-decoration-none text-light opacity-50" href="#"
                            ><i class="bi bi-instagram"></i
                        ></a>
                        </button>
                        <button
                        class="btn btn-dark me-2 rounded rounded-5 fw-bold fs-6"
                        style="color: #7f7f7f"
                        type="button"
                        >
                        <a class="text-decoration-none text-light opacity-50" href="#"
                            ><i class="bi bi-twitter"></i
                        ></a>
                        </button>
                        <button
                        class="btn btn-dark me-2 rounded rounded-5 fw-bold fs-6"
                        style="color: #7f7f7f"
                        type="button"
                        >
                        <a class="text-decoration-none text-light opacity-50" href="#"
                            ><i class="bi bi-facebook"></i
                        ></a>
                        </button>
                    </div>
                    </div>
                </div>
                <hr class="text-secondary opacity-75 ms-3" />
                <div class="row row-cols-2 d-flex ms-3">
                    <div class="col-2 d-flex justify-content-start ps-0 pe-1">
                    <span class="opacity-50 text-light">Informazioni legali</span>
                    </div>
                    <div class="col-2 d-flex justify-content-start ps-0 pe-1">
                    <span class="opacity-50 text-light">Centro sulla privacy</span>
                    </div>
                    <div class="col-2 d-flex justify-content-start ps-0 pe-1">
                    <span class="opacity-50 text-light">Informativa sulla privacy</span>
                    </div>
                    <div class="col-2 d-flex justify-content-start ps-0 pe-1">
                    <span class="opacity-50 text-light">Impostazioni cookie</span>
                    </div>
                    <div class="col-2 d-flex justify-content-start ps-0 pe-1">
                    <span class="opacity-50 text-light">Info annunci</span>
                    </div>
                    <div class="col-2 d-flex flex-grow justify-content-end">
                    <h6 class="text-light opacity-75">© 2023 Spotify AB</h6>
                    </div>
                </div>
                </footer>
            </div>
            </div>
            <!-- +++++++++++++++++++++++++++++++++++++++++++++++++++    BOTTOM BAR          ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
            <div class="fixed-bottom container-fluid bg-dark">
            <div class="row flex-nowrap d-flex">
                <!----------------------------------------     PRIMA COL -->
                <div class="p-3 col-3 d-flex justify-content-start align-items-center">
                <img src="assets/imgs/search/image-12.jpg" alt="" width="60" height="60" />
                <div class="align-items-center d-flex flex-column ms-3">
                    <p class="mb-0 fw-bold text-light">Fat Funny Friend</p>
                    <p class="text-start mb-0 text-light">Maddie Zahm</p>
                </div>
                <div class="d-flex ps-3">
                    <a href="#" class="text-decoration-none"> <i class="ms-2 bi bi-heart fs-2"></i></a>
                </div>
                </div>
                <!-- ++++++++++++            seconda col          ++++++++++-->
                <div class="col-6 d-flex justify-content-center container-fluid align-items-center ms-5 p-3">
                <div class="align-items-center d-flex flex-column">
                    <div class="d-flex align-items-center">
                    <!-- ++++++++++++++++++++++      ARROW shuffle-------riproduzione casuale         ++++++++ -->
                    <button class="bg-transparent border-0 fs-4">
                        <i id="btnPlayer" class="bi bi-shuffle"></i>
                    </button>
                    <!-- ++++++++++++++++++++++      ARROW Left          ++++++++ -->
                    <button class="bg-transparent border-0 fs-3">
                        <i class="bi bi-skip-start-fill"></i>
                    </button>
                    <!-- ++++++++++++++++++++++    play         ++++++++ -->
                    <button id="playPlayer btnPlayer" class="bg-success rounded rounded-circle border-0 px-2 fs-2" style="--bs-bg-opacity: .5;">
                        <i id="btnPlayer" class="bi bi-play-fill"></i>
                    </button>
                    <!-- ++++++++++++++++++++++      ARROW Right          ++++++++ -->
                    <button class="bg-transparent border-0 fs-3">
                        <i class="bi bi-skip-end-fill"></i>
                    </button>
                    <!-- ++++++++++++++++++++++       ARROW ROLE       ++++++++ -->
                    <button class="bg-transparent border-0 fs-4">
                        <i id="btnPlayer" class="bi bi-repeat"></i>
                    </button>
                    </div>
                    <!-- +++++++++++++++++++++++++            PROGRESS BAR                +++++++++++++++++++++++++++++ -->
                    <div class="playback-bar d-flex mt-3 text-light">
                    <div data-testid="playback-position" class="mx-2" data-encore-id="type">1:07</div>
                    <div class="" data-testid="playback-progressbar">
                        <label class="hidden-visually">
                        <!-- gestire le misure della progresse bar in larghezza -->
                        <input
                            style="min-width: 45vw"
                            type="range"
                            min="0"
                            max="200"
                            step="5"
                            aria-valuetext="1:07/2:43"
                            value="80"
                        /></label>
                        <div
                        class="TywOcKZEqNynWecCiATc"
                        data-testid="progress-bar"
                        style="--progress-bar-transform: 41.1043%"
                        >
                        <div class="NoOAOv6U6vtqj_ybS1Cd" data-testid="progress-bar-background">
                            <div class="w699O0LgQRghXyl3bs9u"><div class="epWhU7hHGktzlO_dop6z"></div></div>
                            <div class="Vis45PPawTyED7Lt2_LI"></div>
                        </div>
                        </div>
                    </div>
                    <div
                        data-testid="playback-duration"
                        data-test-position="67930"
                        class="Type__TypeElement-sc-goli3j-0 fyaNJr npFSJSO1wsu3mEEGb5bh ms-2"
                        data-encore-id="type"
                        style="color: rgb(255, 255, 255)"
                    >
                        2:43
                    </div>
                    </div>
                </div>
                </div>
                <!-- ++++++++++++          terza col       ++++++++++-->
                <div class="col-auto d-flex align-items-center">
                <!-- microphone -->
                <button class="bg-transparent border-0 fs-5">
                    <i id="btnPlayer" class="bi bi-mic"></i>
                </button>
                <!-- +++++++++++++++++++++++++++     menù hamburgher -+++++++++++++++-->
                <button class="bg-transparent border-0 fs-5">
                    <i id="btnPlayer" class="bi bi-list"></i>
                </button>
                <!--+++++++++++++++++++++++    hi fi audio     +++++++++++++++++++++++++++ -->
                <button id class="bg-transparent border-0 fs-5">
                    <i id="btnPlayer" class="bi bi-pc-display"></i>
                </button>
                <!--+++++++++++++++++++++++++++++++++    volume      +++++++++++++++++-->
                <button class="bg-transparent border-0 fs-4">
                    <i id="btnPlayer" class="bi bi-volume-down"></i>
                </button>
                <!-- +++++++++++++++++     volume progress bar ++++++++-->
                <div class="col-6 col-md-5 d-flex">
                    <input
                    style="width: 5vw"
                    type="range"
                    id="greenClick"
                    name="cowbell"
                    min="0"
                    max="100"
                    value="90"
                    step="10"
                    />
                </div>
                <!--+++++++++++++++++ Arrows expand +++++++++++++++-->
                <div><i class="ms-0 mx-5 bi bi-arrows-angle-expand"></i></div>
                </div>
            </div>
            </div>
            <!--++++++++++++++++++++++++++++++++++++++++++++             BOTTOM BAR fine     +++++++++++++++++++++++++++++++++++++-->
        </div>
        </div>

        `;
        row.appendChild(col)






    } catch (error) {
        alert("We discovered an error during the operation: " + error.message)
    
    } 





}


window.onload = async () => {
    fetchMain()
}*/