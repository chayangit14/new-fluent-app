import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '1f6fb6c59a0e45bf87dc05a203a417b6'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '00387a910169447aab04bfb8819dc2b3'
                    }
                    cs0: {
                        table: 'sys_script_client'
                        id: '7abd47e3fca34c79b633fc8248abb2c2'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '7dbc727618614ef8989771c6735dac60'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: '8d46eb1aa529451fbf50f2a9378b48f5'
                    }
                }
            }
        }
    }
}
