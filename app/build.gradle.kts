@Suppress("DSL_SCOPE_VIOLATION")
plugins {
    id(libs.plugins.android.application.get().pluginId)
    id(libs.plugins.kotlin.android.get().pluginId)
    id(libs.plugins.androidx.navigation.safeargs.get().pluginId)
    id(libs.plugins.ksp.get().pluginId)
    id(libs.plugins.mikepenz.aboutlibraries.get().pluginId)
    id("kotlinx-serialization")
}

android {
    namespace = "ss.nscube.webshare"
    compileSdk = 33

    packaging {
        resources.excludes.add("META-INF/*")
        resources.excludes.add("META-INF/licenses/*")
        resources.excludes.add("**/attach_hotspot_windows.dll")
    }

    defaultConfig {
        applicationId = "ss.nscube.webshare"
        minSdk = 21
        targetSdk = 33
        versionCode = 27
        versionName = "2.0.7"
        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
    }

    androidResources {
        noCompress += ""
    }

    buildTypes {
        getByName("release") {
            isMinifyEnabled = false
            proguardFiles(getDefaultProguardFile("proguard-android-optimize.txt"), "proguard-rules.pro")
            signingConfig = signingConfigs.getByName("debug")
        }
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }

    kotlinOptions {
        jvmTarget = "17"
    }

    buildFeatures {
        viewBinding = true
    }
}

dependencies {
    implementation(projects.coreDatabase)
    implementation(projects.coreServer)

    implementation(libs.androidx.fragment)
    implementation(libs.androidx.navigation.fragment)
    implementation(libs.androidx.navigation.ui)

    implementation(libs.androidx.lifecycle)
    implementation(libs.androidx.viewpager2)
    implementation(libs.androidx.cardview)

    //Viewing open source licences
    implementation(libs.mikepenz.aboutlibraries)

    implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:1.6.0")

    //Database
    implementation(libs.androidx.room.runtime)
    implementation(files("libs/com.nscube.webshareserver-0.0.1.jar"))
    ksp(libs.androidx.room.compiler)

    //Json parser
    implementation(libs.moshi)

    //Qr code
    implementation(libs.zxing)

    //Image loading
    implementation(libs.glide)
    implementation(libs.coil)
    implementation(libs.coil.svg)
    implementation(libs.coil.video)

    implementation(libs.androidx.core.ktx)
    implementation(libs.androidx.appcompat)

    implementation(libs.material)

    //Local Unit Tests
    implementation(libs.androidx.test.core)
    testImplementation(libs.junit)
    testImplementation(libs.truth)

    //Instrumented Unit Tests
    androidTestImplementation(libs.junit)
    androidTestImplementation(libs.androidx.arch.core)
    androidTestImplementation(libs.truth)
    androidTestImplementation(libs.androidx.junit)
    androidTestImplementation(libs.androidx.espresso)
}