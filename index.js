var submitButton = document.getElementById("submit");
var newListElem = document.getElementById('final-process-list');

var defaultList = ['AccessibilityVisualsAgent', 'accountsd', 'Activity Monitor', 'adprivacyd', 'AirPlayUIAgent', 'akd', 'AMPDeviceDiscoveryAgent', 'amsaccountsd', 'amsengagementd', 'APFSUserAgent', 'AppleSpell', 'AppSSOAgent', 'appstoreagent', 'askpermissiond', 'AssetCacheLocatorService', 'assistant_cdmd', 'assistantd', 'audioaccessoryd', 'AudioComponentRegistrar', 'AuthenticationServicesAgent', 'avconferenced', 'axassetsd', 'BackgroundTaskManagementAgent', 'BiomeAgent', 'bird', 'bluetoothuserd', 'calaccessd', 'CalendarFocusConfigurationExtension', 'CalendarWidgetExtension', 'CallHistoryPluginHelper', 'callservicesd', 'CarbonComponentScannerXPC', 'CategoriesService', 'CategoriesService', 'cdpd', 'cfprefsd', 'chrome_crashpad_handler', 'chronod', 'cloudd', 'CloudKeychainProxy', 'CMFSyncAgent', 'colorsync.useragent', 'com.apple.accessibility.mediaaccessibilityd', 'com.apple.appkit.xpc.openAndSavePanelService', 'com.apple.audio.ComponentTagHelper', 'com.apple.audio.SandboxHelper', 'com.apple.audio.SandboxHelper', 'com.apple.audio.SandboxHelper', 'com.apple.audio.SandboxHelper', 'com.apple.audio.SandboxHelper', 'com.apple.audio.SandboxHelper', 'com.apple.audio.SandboxHelper', 'com.apple.audio.SandboxHelper', 'com.apple.CloudDocs.iCloudDriveFileProvider', 'com.apple.ColorSyncXPCAgent', 'com.apple.CoreSimulator.CoreSimulatorService', 'com.apple.DictionaryServiceHelper', 'com.apple.dock.extra', 'com.apple.geod', 'com.apple.hiservices-xpcservice', 'com.apple.quicklook.ThumbnailsAgent', 'com.apple.sbd', 'com.apple.SiriTTSService.TrialProxy', 'com.apple.SiriTTSService.TrialProxy', 'com.apple.SiriTTSService.TrialProxy', 'com.apple.tonelibraryd', 'com.apple.WebKit.GPU', 'com.apple.WebKit.Networking', 'com.apple.WebKit.WebContent', 'CommCenter', 'commerce', 'contactsd', 'containermanagerd', 'ContainerMetadataExtractor', 'contentlinkingd', 'ContextService', 'ContextStoreAgent', 'ContinuityCaptureAgent', 'ControlCenter', 'coreauthd', 'CoreLocationAgent', 'CoreServicesUIAgent', 'corespeechd', 'corespotlightd', 'CSExattrCryptoService', 'CSExattrCryptoService', 'csnameddatad', 'ctkahp', 'ctkd', 'CursorUIViewService', 'dataaccessd', 'deleted', 'devicecheckd', 'diagnosticextensionsd', 'diagnostics_agent', 'distnoted', 'dmd', 'Dock', 'donotdisturbd', 'Electron', 'EscrowSecurityAlert', 'extensionkitservice', 'extensionkitservice', 'extensionkitservice', 'extensionkitservice', 'extensionkitservice', 'ExternalQuickLookSatellite-arm64', 'familycircled', 'FamilyControlsAgent', 'fileproviderd', 'financed', 'Finder', 'findmydevice-user-agent', 'findmylocateagent', 'fmfd', 'followupd', 'fontd', 'fontworker', 'gamecontrolleragentd', 'geodMachServiceBridge', 'heard', 'homed', 'homeenergyd', 'icdd', 'iCloudNotificationAgent', 'iconservicesagent', 'identityservicesd', 'imagent', 'IMDPersistenceAgent', 'imklaunchagent', 'IntelligencePlatformComputeService', 'intelligentroutingd', 'itunescloudd', 'keyboardservicesd', 'Keychain Circle Notification', 'knowledge-agent', 'KonaSynthesizer', 'linkd', 'localizationswitcherd', 'lockoutagent', 'Logi Bolt', 'LogiMgrDaemon', 'loginwindow', 'lsd', 'MacinTalkAUSP', 'maild', 'MailShortcutsExtension', 'ManagedSettingsAgent', 'MauiAUSP', 'mdbulkimport', 'mdworker', 'mdworker_shared', 'mdworker_shared', 'mdworker_shared', 'mdworker_shared', 'mdworker_shared', 'mdworker_shared', 'mdworker_shared', 'mdworker_shared', 'mdworker_shared', 'mdworker_shared', 'mdwrite', 'mediaanalysisd', 'mediaremoteagent', 'MessagesActionExtension', 'Microsoft Outlook', 'Microsoft SharePoint', 'mlhostd', 'mobiletimerd', 'MTLAssetUpgraderD', 'MTLCompilerService', 'MTLCompilerService', 'MTLCompilerService', 'MTLCompilerService', 'MTLCompilerService', 'MTLCompilerService', 'naturallanguaged', 'ndoagent', 'neagent', 'NearDrop', 'networkserviceproxy', 'NotificationCenter', 'nsurlsessiond', 'OpenVPN Connect Helper', 'OpenVPN Connect Helper', 'OpenVPNConnect', 'PAH_Extension', 'parsec-fbf', 'parsecd', 'PasswordBreachAgent', 'pboard', 'pbs', 'pkd', 'PlugInLibraryService', 'PlugInLibraryService', 'printtool', 'progressd', 'promotedcontentd', 'ProtectedCloudKeySyncing', 'QuickLookSatellite', 'QuickLookUIService', 'QuickLookUIService', 'rapportd', 'remindd', 'replayd', 'ReportCrash', 'routined', 'SafariBookmarksSyncAgent', 'SafariLaunchAgent', 'SafariLinkExtension', 'ScopedBookmarkAgent', 'ScreenTimeAgent', 'ScreenTimeWidgetExtension', 'secd', 'secinitd', 'seserviced', 'SetStoreUpdateService', 'sharedfilelistd', 'sharingd', 'SidecarRelay', 'SimulatorTrampoline', 'siriactionsd', 'SiriAUSP', 'siriknowledged', 'sirittsd', 'sociallayerd', 'SoftwareUpdateNotificationManager', 'SpeechSynthesisServerXPC', 'spindump_agent', 'Spotlight', 'StatusKitAgent', 'StocksWidget', 'storedownloadd', 'storekitagent', 'suggestd', 'swcd', 'syncdefaultsd', 'SystemUIServer', 'talagent', 'tccd', 'TextInputMenuAgent', 'TextInputSwitcher', 'ThumbnailExtension_macOS', 'translationd', 'transparencyd', 'triald', 'trustd', 'TrustedPeersHelper', 'UIKitSystem', 'UmbrellaMenu', 'universalaccessd', 'UniversalControl', 'UsageTrackingAgent', 'useractivityd', 'UserEventAgent', 'usernoted', 'usernotificationsd', 'ViewBridgeAuxiliary', 'voicebankingd', 'VSCodium Helper', 'VSCodium Helper', 'VSCodium Helper', 'VSCodium Helper', 'VSCodium Helper (GPU)', 'VSCodium Helper (Plugin)', 'VSCodium Helper (Plugin)', 'VSCodium Helper (Plugin)', 'VSCodium Helper (Plugin)', 'VSCodium Helper (Renderer)', 'VTEncoderXPCService', 'VTEncoderXPCService', 'WallpaperAgent', 'WallpaperImageExtension', 'WardaSynthesizer_arm64', 'WardaSynthesizer_x86_64', 'weatherd', 'WeatherWidget', 'webprivacyd', 'WiFiAgent', 'WiFiVelocityAgent', 'WindowManager', 'XPCKeychainSandboxCheck', 'XProtectPluginService', 'XprotectService', 'zsh', 'VTDecoderXPCService', 'photolibraryd', 'Notes', 'News', 'newsd', 'cloudphotod', 'Mail', 'AccountSubscriber', 'AMPArtworkAgent', 'AMPLibraryAgent', 'Appearance', 'appleaccountd', 'AppleIDSettings', 'assistant_service', 'avatarsd', 'backgroundassets.user', 'betaenrollmentd', 'biomesyncd', 'BTLEServerAgent', 'CallHistorySyncHelper', 'CDs&DVDsSettingsExtension', 'ClassKitSettings', 'ClassroomSettings', 'cloudpaird', 'com.apple.BKAgentService', 'com.apple.CloudPhotosConfiguration', 'com.apple.HasTRB', 'com.apple.photos.ImageConversionService', 'com.apple.Safari.History', 'com.apple.Safari.SafeBrowsing.Service', 'com.apple.siri-distributed-evaluation', 'com.apple.siri.embeddedspeech', 'contactsdonationagent', 'ControlStrip', 'coreautha', 'EmojiFunctionRowIM_Extension', 'FamilySettings', 'FollowUpSettingsExtension', 'GameControllerMacSettings', 'GroupSessionService', 'HeadphoneSettingsExtension', 'HomeWidget', 'IDSBlastDoorService', 'IMAutomaticHistoryDeletionAgent', 'installerauthagent', 'intelligenceplatformd', 'InteractiveLegacyProfilesSubscriber', 'KeychainCircleNotification', 'LegacyProfilesSubscriber', 'LinkedNotesUIService', 'LoginUserService', 'ManagementTestSubscriber', 'mapspushd', 'media-indexer', 'MessagesBlastDoorService', 'metrickitd', 'MobileSMSSpotlightImporterCatalyst', 'MouseExtension', 'nbagent', 'Network', 'nsattributedstringagent', 'PasscodeSettingsSubscriber', 'passd', 'photoanalysisd', 'PodcastContentService', 'PowerChime', 'PowerPreferences', 'proactived', 'proactiveeventtrackerd', 'recentsd', 'Reminders', 'RemoteManagementAgent', 'reversetemplated', 'SafeEjectGPUAgent', 'SafeEjectGPUService', 'sportsd', 'storeaccountd', 'studentd', 'SystemSettings', 'tipsd', 'TouchID&Password', 'TrackpadExtension', 'USBAgent', 'UserNotificationCenter', 'VPN', 'WalletSettingsExtension', 'WiFiSettings', 'XProtect', 'agent.exe', 'ApplicationFrameHost.exe', 'audiodg.exe', 'backgroundTaskHost.exe', 'blnsvr.exe', 'BraveCrashHandler.exe', 'BraveCrashHandlerArm64.exe', 'ctfmon.exe', 'dgnsvc.exe', 'dllhost.exe', 'dllhost.exe', 'dwm.exe', 'explorer.exe', 'fontdrvhost.exe', 'fontdrvhost.exe', 'fsATProxy.exe', 'ISUSPM.exe', 'loggerservice.exe', 'lsass.exe', 'msedge.exe', 'msedge.exe', 'msedge.exe', 'msedge.exe', 'msedge.exe', 'msedgewebview2.exe', 'msedgewebview2.exe', 'msedgewebview2.exe', 'msedgewebview2.exe', 'msedgewebview2.exe', 'msedgewebview2.exe', 'PhoneExperienceHost.exe', 'RuntimeBroker.exe', 'RuntimeBroker.exe', 'RuntimeBroker.exe', 'RuntimeBroker.exe', 'SearchHost.exe', 'SearchIndexer.exe', 'SearchProtocolHost.exe', 'SecurityHealthSystray.exe', 'ShellExperienceHost.exe', 'sihost.exe', 'smartscreen.exe', 'spice-webdavd.exe', 'spoolsv.exe', 'sqlwriter.exe', 'StartMenuExperienceHost.exe', 'svchost.exe', 'svchost.exe', 'svchost.exe', 'svchost.exe', 'svchost.exe', 'svchost.exe', 'svchost.exe', 'svchost.exe', 'svchost.exe', 'svchost.exe', 'svchost.exe', 'svchost.exe', 'svchost.exe', 'svchost.exe', 'svchost.exe', 'svchost.exe', 'svchost.exe', 'svchost.exe', 'svchost.exe', 'svchost.exe', 'svchost.exe', 'svchost.exe', 'svchost.exe', 'svchost.exe', 'svchost.exe', 'taskhostw.exe', 'TextInputHost.exe', 'vdagent.exe', 'vdservice.exe', 'VSSVC.exe', 'Widgets.exe', 'WidgetService.exe', 'winlogon.exe', 'WmiPrvSE.exe', 'WmiPrvSE.exe', 'WUDFHost.exe']

submitButton.addEventListener('click', async ()=>{

    // Reset new list
    newListElem.innerHTML = "";

    var processList = document.getElementById('process-list').value;
    processList = processList.replace(/ /g, "").split(",");
    
    let newList = [];
    for (let i = 0; i < processList.length; i++){
        if(!(defaultList.includes(processList[i]))){
            newList.push(processList[i]);
        }
    }

    newListElem.innerHTML += "<h2>Results:</h2>"
    for(let i = 0; i < newList.length; i++){

        // Create a google link
        var item = "<a id='item-link' target='_blank' href='https://www.google.com/search?q=What+is+" + newList[i] + "'>" + newList[i] + "</a>";
        
        // Show on webpage
        newListElem.innerHTML += item + "<br>";
    }
    
});


var defaultList = [ 'sqlwriter.exe',
                    'voicebankingd',
                    'AccessibilityVisualsAgent',
                    'remindd',
                    'com.apple.CloudPhotosConfiguration',
                    'parsecd',
                    'deleted',
                    'taskhostw.exe',
                    'LogiMgrDaemon',
                    'CategoriesService',
                    'Spotlight',
                    'Network',
                    'UserNotificationCenter',
                    'SecurityHealthSystray.exe',
                    'WallpaperAgent',
                    'CMFSyncAgent',
                    'ClassroomSettings',
                    'betaenrollmentd',
                    'com.apple.WebKit.GPU',
                    'WiFiSettings',
                    'AuthenticationServicesAgent',
                    'com.apple.Safari.SafeBrowsing.Service',
                    'trustd',
                    'recentsd',
                    'SearchHost.exe',
                    'EmojiFunctionRowIM_Extension',
                    'printtool',
                    'passd',
                    'fontd',
                    'spindump_agent',
                    'mdworker_shared',
                    'assistant_service',
                    'LoginUserService',
                    'CalendarFocusConfigurationExtension',
                    'WindowManager',
                    'naturallanguaged',
                    'BTLEServerAgent',
                    'akd',
                    'nsattributedstringagent',
                    'avatarsd',
                    'spoolsv.exe',
                    'ContextService',
                    'CalendarWidgetExtension',
                    'devicecheckd',
                    'ProtectedCloudKeySyncing',
                    'lockoutagent',
                    'spice-webdavd.exe',
                    'fileproviderd',
                    'SearchIndexer.exe',
                    'linkd',
                    'coreautha',
                    'mlhostd',
                    'ndoagent',
                    'secd',
                    'corespeechd',
                    'RuntimeBroker.exe',
                    'suggestd',
                    'BackgroundTaskManagementAgent',
                    'NearDrop',
                    'dataaccessd',
                    'StartMenuExperienceHost.exe',
                    'HeadphoneSettingsExtension',
                    'WeatherWidget',
                    'fmfd',
                    'AppleIDSettings',
                    'findmylocateagent',
                    'AppSSOAgent',
                    'BiomeAgent',
                    'assistant_cdmd',
                    'MobileSMSSpotlightImporterCatalyst',
                    'AccountSubscriber',
                    'LinkedNotesUIService',
                    'SidecarRelay',
                    'tccd',
                    'com.apple.CloudDocs.iCloudDriveFileProvider',
                    'identityservicesd',
                    'com.apple.appkit.xpc.openAndSavePanelService',
                    'sportsd',
                    'AMPLibraryAgent',
                    'com.apple.CoreSimulator.CoreSimulatorService',
                    'maild',
                    'mediaanalysisd',
                    'ContinuityCaptureAgent',
                    'UIKitSystem',
                    'lsd',
                    'CoreServicesUIAgent',
                    'audioaccessoryd',
                    'ThumbnailExtension_macOS',
                    'homed',
                    'CSExattrCryptoService',
                    'axassetsd',
                    'storedownloadd',
                    'com.apple.HasTRB',
                    'transparencyd',
                    'ContextStoreAgent',
                    'VSCodium Helper',
                    'AudioComponentRegistrar',
                    'SystemSettings',
                    'ReportCrash',
                    'mdwrite',
                    'sihost.exe',
                    'MTLCompilerService',
                    'GroupSessionService',
                    'siriactionsd',
                    'IMAutomaticHistoryDeletionAgent',
                    'adprivacyd',
                    'SafariBookmarksSyncAgent',
                    'VSSVC.exe',
                    'mapspushd',
                    'rapportd',
                    'APFSUserAgent',
                    'Logi Bolt',
                    'VSCodium Helper (Renderer)',
                    'CommCenter',
                    'promotedcontentd',
                    'cloudphotod',
                    'tipsd',
                    'metrickitd',
                    'accountsd',
                    'ISUSPM.exe',
                    'Electron',
                    'parsec-fbf',
                    'ShellExperienceHost.exe',
                    'itunescloudd',
                    'Activity Monitor',
                    'com.apple.sbd',
                    'colorsync.useragent',
                    'FollowUpSettingsExtension',
                    'mobiletimerd',
                    'homeenergyd',
                    'CallHistoryPluginHelper',
                    'progressd',
                    'intelligenceplatformd',
                    'PhoneExperienceHost.exe',
                    'WUDFHost.exe',
                    'biomesyncd',
                    'SafeEjectGPUService',
                    'SystemUIServer',
                    'sirittsd',
                    'WmiPrvSE.exe',
                    'ExternalQuickLookSatellite-arm64',
                    'pkd',
                    'fontworker',
                    'MouseExtension',
                    'KeychainCircleNotification',
                    'com.apple.SiriTTSService.TrialProxy',
                    'InteractiveLegacyProfilesSubscriber',
                    'callservicesd',
                    'EscrowSecurityAlert',
                    'imklaunchagent',
                    'FamilyControlsAgent',
                    'bird',
                    'AMPDeviceDiscoveryAgent',
                    'proactived',
                    'Microsoft SharePoint',
                    'StocksWidget',
                    'AppleSpell',
                    'MTLAssetUpgraderD',
                    'zsh',
                    'iCloudNotificationAgent',
                    'UniversalControl',
                    'Microsoft Outlook',
                    'com.apple.ColorSyncXPCAgent',
                    'loginwindow',
                    'useractivityd',
                    'com.apple.accessibility.mediaaccessibilityd',
                    'extensionkitservice',
                    'UserEventAgent',
                    'Finder',
                    'FamilySettings',
                    'Mail',
                    'com.apple.geod',
                    'TextInputSwitcher',
                    'corespotlightd',
                    'appleaccountd',
                    'SimulatorTrampoline',
                    'vdagent.exe',
                    'CarbonComponentScannerXPC',
                    'ctkd',
                    'AirPlayUIAgent',
                    'installerauthagent',
                    'StatusKitAgent',
                    'com.apple.tonelibraryd',
                    'vdservice.exe',
                    'Widgets.exe',
                    'contactsd',
                    'Reminders',
                    'amsaccountsd',
                    'secinitd',
                    'familycircled',
                    'networkserviceproxy',
                    'winlogon.exe',
                    'PasscodeSettingsSubscriber',
                    'blnsvr.exe',
                    'ManagementTestSubscriber',
                    'photolibraryd',
                    'CursorUIViewService',
                    'XProtectPluginService',
                    'IDSBlastDoorService',
                    'dwm.exe',
                    'chrome_crashpad_handler',
                    'MauiAUSP',
                    'webprivacyd',
                    'com.apple.hiservices-xpcservice',
                    'knowledge-agent',
                    'sociallayerd',
                    'QuickLookUIService',
                    'VTEncoderXPCService',
                    'WiFiVelocityAgent',
                    'audiodg.exe',
                    'agent.exe',
                    'Notes',
                    'MessagesBlastDoorService',
                    'ClassKitSettings',
                    'icdd',
                    'Keychain Circle Notification',
                    'distnoted',
                    'WallpaperImageExtension',
                    'backgroundassets.user',
                    'SoftwareUpdateNotificationManager',
                    'Dock',
                    'cfprefsd',
                    'com.apple.audio.SandboxHelper',
                    'com.apple.audio.ComponentTagHelper',
                    'HomeWidget',
                    'TouchID&Password',
                    'RemoteManagementAgent',
                    'neagent',
                    'LegacyProfilesSubscriber',
                    'commerce',
                    'storekitagent',
                    'com.apple.WebKit.WebContent',
                    'SetStoreUpdateService',
                    'IntelligencePlatformComputeService',
                    'imagent',
                    'CoreLocationAgent',
                    'findmydevice-user-agent',
                    'VSCodium Helper (GPU)',
                    'containermanagerd',
                    'SiriAUSP',
                    'reversetemplated',
                    'XPCKeychainSandboxCheck',
                    'diagnosticextensionsd',
                    'dgnsvc.exe',
                    'ControlCenter',
                    'svchost.exe',
                    'keyboardservicesd',
                    'mdworker',
                    'WiFiAgent',
                    'swcd',
                    'siriknowledged',
                    'VSCodium Helper (Plugin)',
                    'ControlStrip',
                    'heard',
                    'talagent',
                    'com.apple.siri-distributed-evaluation',
                    'SpeechSynthesisServerXPC',
                    'ViewBridgeAuxiliary',
                    'ScopedBookmarkAgent',
                    'studentd',
                    'followupd',
                    'translationd',
                    'fontdrvhost.exe',
                    'replayd',
                    'geodMachServiceBridge',
                    'usernoted',
                    'CallHistorySyncHelper',
                    'Appearance',
                    'explorer.exe',
                    'backgroundTaskHost.exe',
                    'PowerChime',
                    'newsd',
                    'ManagedSettingsAgent',
                    'KonaSynthesizer',
                    'TrackpadExtension',
                    'ApplicationFrameHost.exe',
                    'SafariLinkExtension',
                    'ctfmon.exe',
                    'TextInputHost.exe',
                    'WardaSynthesizer_arm64',
                    'loggerservice.exe',
                    'triald',
                    'ScreenTimeWidgetExtension',
                    'PowerPreferences',
                    'com.apple.Safari.History',
                    'lsass.exe',
                    'WalletSettingsExtension',
                    'com.apple.WebKit.Networking',
                    'TextInputMenuAgent',
                    'cloudd',
                    'dllhost.exe',
                    'media-indexer',
                    'com.apple.dock.extra',
                    'mdbulkimport',
                    'com.apple.photos.ImageConversionService',
                    'coreauthd',
                    'UmbrellaMenu',
                    'chronod',
                    'VTDecoderXPCService',
                    'dmd',
                    'cdpd',
                    'contentlinkingd',
                    'PAH_Extension',
                    'PlugInLibraryService',
                    'iconservicesagent',
                    'com.apple.DictionaryServiceHelper',
                    'csnameddatad',
                    'storeaccountd',
                    'SafariLaunchAgent',
                    'com.apple.siri.embeddedspeech',
                    'mediaremoteagent',
                    'UsageTrackingAgent',
                    'ScreenTimeAgent',
                    'bluetoothuserd',
                    'SafeEjectGPUAgent',
                    'calaccessd',
                    'nsurlsessiond',
                    'News',
                    'gamecontrolleragentd',
                    'CDs&DVDsSettingsExtension',
                    'PasswordBreachAgent',
                    'MacinTalkAUSP',
                    'CloudKeychainProxy',
                    'TrustedPeersHelper',
                    'financed',
                    'MessagesActionExtension',
                    'avconferenced',
                    'diagnostics_agent',
                    'photoanalysisd',
                    'AssetCacheLocatorService',
                    'proactiveeventtrackerd',
                    'AMPArtworkAgent',
                    'weatherd',
                    'sharingd',
                    'sharedfilelistd',
                    'GameControllerMacSettings',
                    'IMDPersistenceAgent',
                    'com.apple.quicklook.ThumbnailsAgent',
                    'QuickLookSatellite',
                    'nbagent',
                    'seserviced',
                    'assistantd',
                    'askpermissiond',
                    'WidgetService.exe',
                    'amsengagementd',
                    'PodcastContentService',
                    'cloudpaird',
                    'smartscreen.exe',
                    'contactsdonationagent',
                    'fsATProxy.exe',
                    'VPN',
                    'ctkahp',
                    'donotdisturbd',
                    'pboard',
                    'localizationswitcherd',
                    'appstoreagent',
                    'USBAgent',
                    'syncdefaultsd',
                    'SearchProtocolHost.exe',
                    'universalaccessd',
                    'WardaSynthesizer_x86_64',
                    'ContainerMetadataExtractor',
                    'NotificationCenter',
                    'usernotificationsd',
                    'com.apple.BKAgentService',
                    'pbs',
                    'XProtect',
                    'XprotectService',
                    'intelligentroutingd',
                    'MailShortcutsExtension',
                    'routined' ]
