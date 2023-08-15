@Suppress("DSL_SCOPE_VIOLATION") // TODO: Remove once KTIJ-19369 is fixed
plugins {
    alias(libs.plugins.android.library)
    alias(libs.plugins.kotlin.android)
}

android {
    namespace = "ss.nscube.webshare.core.server"
    compileSdk = 33

    packaging {
        resources.excludes.add("META-INF/*")
        resources.excludes.add("META-INF/licenses/*")
        resources.excludes.add("**/attach_hotspot_windows.dll")
    }

    aaptOptions {
        noCompress += ""
    }

    sourceSets {
        getByName("test") {
            resources {
                srcDir("src\\main\\assets")
            }
        }
    }

    defaultConfig {
        minSdk = 21

        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
        consumerProguardFiles("consumer-rules.pro")
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            proguardFiles(
                getDefaultProguardFile("proguard-android-optimize.txt"),
                "proguard-rules.pro"
            )
        }
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
    kotlinOptions {
        jvmTarget = "17"
    }
}

dependencies {
    //Json parser
    implementation(libs.moshi)

    //ktor
    implementation(libs.ktor.server.core)
    implementation(libs.ktor.server.netty)
    implementation(libs.ktor.server.partialContent)

    implementation(libs.androidx.core.ktx)

    //Local unit tests
    implementation(libs.androidx.test.core)
    testImplementation(libs.junit)
    testImplementation(libs.truth)

    //Instrumented unit tests
    androidTestImplementation(libs.androidx.junit)
    androidTestImplementation(libs.androidx.espresso)
    androidTestImplementation(libs.truth)
    androidTestImplementation(libs.androidx.arch.core)
    androidTestImplementation(libs.ktor.server.test.host)
    androidTestImplementation("org.junit.jupiter:junit-jupiter-api:5.9.3")
}