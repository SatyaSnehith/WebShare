plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
    id("androidx.navigation.safeargs")
    id("com.google.devtools.ksp")
    id("com.google.android.gms.oss-licenses-plugin")
}

android {
    namespace = "ss.nscube.webshare"
    compileSdk = 33

    defaultConfig {
        applicationId = "ss.nscube.webshare"
        minSdk = 21
        targetSdk = 33
        versionCode = 26
        versionName = "2.0.6"
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
    val navVersion = "2.6.0"
    val fragmentVersion = "1.6.1"
    val lifecycleVersion = "2.2.0"

    implementation("com.google.android.gms:play-services-oss-licenses:17.0.1")

    implementation("androidx.fragment:fragment-ktx:$fragmentVersion")
    implementation("androidx.navigation:navigation-fragment-ktx:$navVersion")
    implementation("androidx.navigation:navigation-ui-ktx:$navVersion")
    implementation( "androidx.lifecycle:lifecycle-extensions:$lifecycleVersion")
    implementation("androidx.viewpager2:viewpager2:1.0.0")
    implementation("androidx.cardview:cardview:1.0.0")

    val roomVersion = "2.5.2"
    implementation("androidx.room:room-runtime:$roomVersion")
    ksp("androidx.room:room-compiler:$roomVersion")

    implementation("com.squareup.moshi:moshi-kotlin:1.14.0")

    implementation("com.google.zxing:core:3.2.1")
    
    implementation("com.github.bumptech.glide:glide:4.15.1")
    implementation("io.coil-kt:coil:2.2.2")
    implementation("io.coil-kt:coil-svg:2.2.2")
    implementation("io.coil-kt:coil-video:2.2.2")

    annotationProcessor("com.github.bumptech.glide:compiler:4.12.0")

    implementation("androidx.core:core-ktx:1.10.1")
    implementation("androidx.appcompat:appcompat:1.6.1")
    implementation("com.google.android.material:material:1.9.0")

    testImplementation("junit:junit:4.13.2")
    androidTestImplementation("androidx.test.ext:junit:1.1.5")
    androidTestImplementation("androidx.test.espresso:espresso-core:3.5.1")
}