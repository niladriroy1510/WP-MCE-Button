(function() {
	tinymce.PluginManager.add('travegotheme_mce_button', function( editor, url ) {
		editor.addButton( 'travegotheme_mce_button', {
			text: 'শর্টকোড',
			icon: true,
			type: 'menubutton',
			image:url+ '/kaka.png',
			menu: [
			
//Need top code




/////Start youtube video add	


				{
					text: 'Add Youtube Video',
                    onclick: function() {
                        editor.windowManager.open( {
                            title: 'Add Youtube Video',
                            body: [
                                
								{
									
									type: 'combobox',
                                    name: 'videowidth',
                                    label: 'Input your Video Width',
                                    'values': [
                                        {text: '640', value: '640'},
                                    ]
									
								},
								{
									
									type: 'combobox',
                                    name: 'videoheight',
                                    label: 'Input your Video height',
                                    'values': [
                                        {text: '360', value: '360'},
                                    ]
									
								},
								
								{
                                    type: 'textbox',
                                    name: 'videoid',
                                    label: 'Input your youtube video id',
                                }
								
								
                            ],
                            onsubmit: function( e ) {
                                editor.insertContent( '[youtube width="' + e.data.videowidth + '" height="' + e.data.videoheight + '" videoid="' + e.data.videoid + '"]');
                            }
                        });
                    }
				},
				
				
/////End youtube video add				
				
				
				
				
				{
					text: 'শিক্ষক তালিকা',
                    onclick: function() {
                        editor.windowManager.open( {
                            title: 'শিক্ষক তালিকা যুক্ত করুন',
                            body: [
                                {
                                    type: 'listbox',
                                    name: 'teachersType',
                                    label: 'ধরন',
                                    'values': [
                                        {text: 'বর্তমান শিক্ষকদের তালিকা', value: 'current'},
                                        {text: 'প্রাক্তণ শিক্ষকদের তালিকা', value: 'archive'}
                                    ]
                                }                                
                            ],
                            onsubmit: function( e ) {
                                editor.insertContent( '[teachers type="' + e.data.teachersType + '"]');
                            }
                        });
                    }
				},
				
				
				
				
				
				
				
				
				
//////////////////Single Short Code Insert			
				
				{
					text: 'শুন‍্যপদের তালিকা',
                    onclick: function() {
                        editor.insertContent( '[vacencies]');
                    }
				},
				
				
				
//////////////////Single Short Code Insert					
				
				
				
				
				{
					text: 'রুটিন',
					icon: true,
					image:url+ '/kaka.png',
                    onclick: function() {
                        editor.windowManager.open( {
                            title: 'রুটিন যুক্ত করুন',
                            body: [
                                {
                                    type: 'listbox',
                                    name: 'routineType',
                                    label: 'ধরন',
                                    'values': [
                                        {text: 'ক্লাশ রুটিন', value: 'class'},
                                        {text: 'পরীক্ষার রুটিন', value: 'exam'}
                                    ]
                                }                                
                            ],
                            onsubmit: function( e ) {
                                editor.insertContent( '[routines type="' + e.data.routineType + '"]');
                            }
                        });
                    }
				},
				





////////////////////////////Start  Add Notice two
				
				{
					text: 'Defult Notice',
                    onclick: function() {
                        editor.windowManager.open( {
                            title: 'Defult Notice Add',
							width: 700,
							height: 400,
                            body: [
                                {
                                    type: 'textbox',
                                    name: 'studentColumn',
                                    label: 'Please write your text',
                                }                                
                            ],
                            onsubmit: function( e ) {
                                editor.insertContent( '[codeonce]' + e.data.studentColumn + '[/codeonce]');
                            }
                        });
                    }
				},
				
////////////////////////////End  Add Notice two




	
////////////////////////////Start Add Notice	

			
				{
					text: 'Add Notice',
                    onclick: function() {
                        editor.windowManager.open( {
                            title: 'Add Notice Shortcode',
                            body: [
                                							
								{
                                    type: 'textbox',
                                    name: 'inputyourtext',
                                    label: 'Input your Text.',
                                },
								
								{
                                    type: 'colorpicker',
                                    name: 'selectyourcolor',
                                    label: 'Input your Color Code.',
                                },
								{
                                    type: 'textbox',
                                    name: 'selectyourbackgroundcolor',
									tooltip: 'Input Color Code Ex: #fff, #000',
                                    label: 'Input your background Color Code.',
                                },
								{
                                    type: 'textbox',
                                    name: 'inputyourpadding',
									tooltip: 'input number with px',
                                    label: 'Input your Padding.',
                                },

                            ],
                            onsubmit: function( e ) {
                                editor.insertContent( '[codeonce_extract content="' + e.data.inputyourtext + '" color="' + e.data.selectyourcolor + '" background="' + e.data.selectyourbackgroundcolor + '" padding="' + e.data.inputyourpadding + '"]');
                            }
                        });
                    }
				},

      
////////////////////////////End Add Notice


////////////////////////////Start Add Slider Add
          
				{
					text: 'Add Slider',
                    onclick: function() {
                        editor.insertContent( '[slidetab]');
                    }
				},

				
////////////////////////////End Add Slider Add

				
////////////////////////////Start Promotion Add				
				
				
				
				
				{
					text: 'promotion Section',
                    onclick: function() {
                        editor.windowManager.open( {
                            title: 'Add your Promotion shortcode',
                            body: [
                                {
                                    type: 'listbox',
                                    name: 'postshowperpagee',
                                    label: 'How many Post show in this section?',
                                    'values': [
                                        {text: '1', value: '1'},
                                        {text: '2', value: '2'},
                                        {text: '3', value: '3'},
                                        {text: '4', value: '4'},
                                        {text: '5', value: '5'},
                                    ]
                                },
								
							 {
                                    type: 'combobox',
                                    name: 'howmanytextshowinthispostt',
                                    label: 'How Many Text Show In This Post',
                                    'values': [
                                        {text: '15', value: '15'},
                                        {text: '20', value: '20'},
                                        {text: '25', value: '25'},
                                        {text: '30', value: '30'},
                                    ]
                                },				
							],
                            onsubmit: function( e ) {
                                editor.insertContent( '[promotion postshowperpage="' + e.data.postshowperpagee + '" howmanytextshowinthispost="' + e.data.howmanytextshowinthispostt + '"]');
                            }
                        });
                    }
				},  

////////////////////////////End Promotion Add




//Need bottom code
                
			]
		});
	});
})();