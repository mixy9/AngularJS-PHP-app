<!DOCTYPE html>

<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <title>Graphite</title>
    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=yes' name='viewport' />

    <!-- Favicons -->
    <link href="assets/images/favicon.png" rel="icon">

    <!--  Css  -->
    <link href="res/css/style.css" rel="stylesheet" type="text/css"/>
    <link rel="stylesheet" href="res/css/font-awesome-4.7.0/css/font-awesome.min.css">

    <!--  Third Party Libraries  -->
    <script src="lib/jquery-3.4.1.min.js" type="text/javascript"></script>
    <script src="lib/jquery-ui-1.10.4.custom.min.js" type="text/javascript"></script>
    <script src="lib/popper.min.js" type="text/javascript"></script>
    <script src="lib/globalize.min.js"></script>
    <script src="lib/angular.js" type="text/javascript"></script>
    <script src="lib/angular.min.js" type="text/javascript"></script>
    <script src="lib/angular-animate.js" type="text/javascript"></script>
    <script src="lib/angular-ui-router-1.0.7.min.js" type="text/javascript"></script>

    <!--  Angular Config  -->
    <script src="app.js" type="text/javascript"></script>
    <script src="routing.js" type="text/javascript"></script>

    <!--  Services  -->

    <!--  Q Framework  -->

    <!--  Directives  -->

    <!--  Pages  -->
    <script src="pages/welcome/welcome.js" type="text/javascript"></script>
    <script src="pages/dashboard/dashboard.js" type="text/javascript"></script>

</head>

<body ng-app="app" ng-controller="mainCtrl as main">

<header>
    <div class="container">
        <nav>
            <div class="nav-brand">
                <a href="" ui-sref="welcome">
                    <img src="assets/images/logo.png" alt="">
                </a>
            </div>

            <div class="menu-icons open">
                <i class="fas fa-bars" ng-click="openNav = !openNav"></i>
            </div>

            <ul class="nav-list sample-show-hide" ng-show="openNav">
                <div class="menu-icons close">
                    <i class="fas fa-times" ng-click="openNav = !openNav"></i>
                </div>

                <li class="nav-item">
                    <a href="#" class="nav-link" ui-sref-active="current" ng-class="{current: $state.includes('welcome')}" ui-sref="welcome">About</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link" ui-sref-active="current" ng-class="{current: $state.includes('dashboard')}" ui-sref="dashboard">Notebook</a>
                </li>
                <li class="nav-item">
                    <a href="" class="nav-link">Profile</a>
                </li>
                <li class="nav-item">
                    <a href="" class="nav-link">Contact</a>
                </li>
            </ul>
        </nav>
    </div>
</header>

<main ui-view class="root-ui-view"></main>

<!--    <footer>-->
<!--        Footer-->
<!--    </footer>-->

</body>

</html>
